import { Component, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NotificationsService } from './services/notifications/notifications.service';
import { Notifications } from './interfaces/notifications.interface';
import { NotificationsTypes } from './constants/notifications-types.constant';
import { NotificationProgressBarComponent } from './components/notification-progress-bar/notification-progress-bar.component';
import { not } from '@angular/compiler/src/output/output_ast';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements AfterViewInit, OnDestroy {
  @ViewChild(NotificationProgressBarComponent)
  public readonly progressBar?: NotificationProgressBarComponent;

  public readonly messages: Notifications[] = [];
  public readonly hideTimeout: number = 2500;

  public notificationsBus: Subscription;
  public isContentHidden: boolean = true;
  public selected?: Notifications = null;
  public backgroundClass: string = "";  

  constructor(private readonly notifications: NotificationsService) { }

  public ngAfterViewInit(): void {
    this.notificationsBus = this.notifications.bus.subscribe({
      next: (notification: Notifications) => this.newNotification(notification),
    });
  }

  public ngOnDestroy(): void {
    this.notificationsBus.unsubscribe();
  }

  private newNotification(notification: Notifications): void {
    this.messages.push(notification);
    this.select(notification);
    this.showContent();
    this.runHideCountdown();
  }

  public get isNotificationsEmpty(): boolean {
    return this.messages?.length <= 0;
  }

  public isSelected(message: Notifications): boolean {
    return !this.isContentHidden && (this.selected === message);
  }

  public async runHideCountdown(): Promise<void> {
    if(this.isContentHidden) {
      return;
    }

    this.clearHideCountdown();
    await this.runProggressBar();
  }

  private async runProggressBar(): Promise<void> {
    const isFinished = await this.progressBar?.run();

    if(!isFinished) {
      return;
    }
    
    this.hideContent();
  }

  public clearHideCountdown(): void {
    if(this.isContentHidden) {
      return;
    }

    this.progressBar?.clear();
  }

  private showContent(): void {
    this.isContentHidden = false;
  }

  private hideContent(): void {
    this.isContentHidden = true;
  }

  public remove(): void {
    this.messages.splice(this.messages.indexOf(this.selected), 1);
    const message = this.messages.length > 0 ? this.messages[0] : null;
    this.select(message);
  }

  public select(notification: Notifications): void {
    if(this.selected === notification) {
      this.toggleContent();
    } else {
      this.changeContentTo(notification);
    }
    
    this.setBackgroundClass(notification.type);
  }

  private toggleContent(): void {
    this.isContentHidden = !this.isContentHidden;
  }

  private changeContentTo(newSelected: Notifications) {
    this.selected = newSelected;
    this.showContent();
  }

  private setBackgroundClass(type: NotificationsTypes): void {
    const backgroundClass = this.getBackgroundColorClassFor(type);
    if(this.backgroundClass === backgroundClass) {
      return;
    }
    this.backgroundClass = backgroundClass;
  }

  private getBackgroundColorClassFor(type: NotificationsTypes): string {
    switch(type) {
      case NotificationsTypes.Success:
        return 'is-success';

      case NotificationsTypes.Warning:
        return 'is-warning';

      case NotificationsTypes.Error:
        return 'is-danger';

      case NotificationsTypes.Info:
        return 'is-link';
      
      default:
        throw new Error("Unknown notification type");
    }
  }
}
