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

  public run() {
    this.clear();
    this.startCountdown();
  }

  public clear() {
    if(this.currentInterval) {
      clearInterval(this.currentInterval);
    }
    this.timeoutProgress = 0;
  }

  private startCountdown() {
    this.currentInterval = setInterval(()=> {
      this.timeoutProgress++;
      if(this.timeoutProgress >= this.progressBarMax) {
        this.clear();
      }
    }, this.realTimeout);
  }

  private get realTimeout() {
    return this.timeout / this.progressBarMax;
  }
}
