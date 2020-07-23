import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-progress-bar',
  template: `
    <progress 
      class="progress is-small"
      [class.progress--hidden]="!timeoutProgress"
      [value]="timeoutProgress"
      [max]="progressBarMax">
    </progress>
  `,
  styleUrls: ['./notification-progress-bar.component.scss'],
})
export class NotificationProgressBarComponent {
  @Input()
  public readonly timeout: number = 0;

  public timeoutProgress: number = 0;
  public progressBarMax: number = 200;

  private currentInterval?: number | any;

  private resolver: ((value: unknown) => void) | null = null;

  public run(): Promise<boolean> {
    this.clear();

    return new Promise<boolean>((resolve, reject) => {
      this.resolver = resolve;

      try{
        this.startCountdown();
      } catch(e) {
        reject(e);
      }
    });
  }

  public clear(): void {
    if(this.resolver !== null) {
      this.resolver(false);
      this.clearResolver();
    }

    if(this.currentInterval) {
      clearInterval(this.currentInterval);
    }

    this.timeoutProgress = 0;
  }

  private clearResolver(): void {
    this.resolver = null;
  }

  private startCountdown(): void {
    this.currentInterval = setInterval(() => this.countdownTick(), this.realTimeout);
  }

  private countdownTick(): void {
    this.timeoutProgress++;
    if(!this.isCountdownFinished) {
      return;
    }

    if(this.resolver) {
      this.resolver(true);
      this.clearResolver();
    }

    this.clear();
  }

  private get isCountdownFinished(): boolean {
    return this.timeoutProgress >= this.progressBarMax;
  }

  private get realTimeout(): number {
    return this.timeout / this.progressBarMax;
  }
}
