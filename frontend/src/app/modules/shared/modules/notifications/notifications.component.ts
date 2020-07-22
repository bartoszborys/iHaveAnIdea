import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NotificationsService } from './services/notifications/notifications.service';
import { Notifications } from './interfaces/notifications.interface';
import { NotificationsTypes } from './constants/notifications-types.constant';
import { NotificationProgressBarComponent } from './components/notification-progress-bar/notification-progress-bar.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements AfterViewInit {
  @ViewChild(NotificationProgressBarComponent)
  public readonly progressBar?: NotificationProgressBarComponent;

  public readonly messages: Notifications[] = [];
  public readonly hideTimeout: number = 2500;
  public isHidden: boolean = true;
  public selected?: Notifications = null;

  private currentTimeout?: number | any;

  constructor(private readonly notifications: NotificationsService) { }

  public ngAfterViewInit(): void {
    this.notifications.bus.subscribe({
      next: (notification: Notifications) => {
        this.messages.push(notification);
        this.select(notification);
        this.showMessage();
        this.setHideTimeout();
      },
    });
  }

  public remove(): void {
    this.messages.splice(this.messages.indexOf(this.selected), 1);
    this.selected = this.messages.length > 0 ? this.messages[0] : null;
  }

  public select(notification: Notifications): void {
    if(this.selected === notification) {
      this.isHidden = !this.isHidden;
    } else {
      this.showMessage();
      this.selected = notification;
    }
  }

  public setHideTimeout() {
    if(this.isHidden) {
      return;
    }

    this.clearHideTimeout();

    this.progressBar?.run();
    this.currentTimeout = setTimeout(()=> {
      this.hideMessage();
    }, this.hideTimeout);
  }

  public clearHideTimeout() {
    if(this.isHidden) {
      return;
    }

    this.progressBar?.clear();
    
    if(this.currentTimeout) {
      clearTimeout(this.currentTimeout);
    }
  }

  private showMessage(): void {
    this.isHidden = false;
  }

  private hideMessage(): void {
    this.isHidden = true;
  }

  public get backgroundClass(): Object {
    return {
      'is-success': this.selected?.type === NotificationsTypes.Success,
      'is-warning': this.selected?.type === NotificationsTypes.Warning,
      'is-danger': this.selected?.type === NotificationsTypes.Error,
      'is-link': this.selected?.type === NotificationsTypes.Info,
    };
  }

  public tabColorClassFor(element: Notifications): Object {
    const cssClasses = {};

    if(!element) {
      return cssClasses;
    }

    if(this?.selected === element && !this.isHidden) {
      Object.assign(cssClasses, {
        'is-selected': true,
      });
    }

    return Object.assign(cssClasses, {
      'has-background-success': element?.type === NotificationsTypes.Success,
      'has-background-warning': element?.type === NotificationsTypes.Warning,
      'has-background-danger': element?.type === NotificationsTypes.Error,
      'has-background-link': element?.type === NotificationsTypes.Info,
    });
  }
}
