import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './services/notifications/notifications.service';
import { Notifications } from './interfaces/notifications.interface';
import { NotificationsTypes } from './constants/notifications-types.constant';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  public readonly messages: Notifications[] = [];
  public isHidden: boolean = true;

  public selected: Notifications | null = null;

  private readonly timeout: number = 2500;
  private currentTimeout?: number | any;

  constructor(private notifications: NotificationsService) { }

  public ngOnInit(): void {
    this.notifications.bus.subscribe({
      next: (notification: Notifications) => {
        this.messages.push(notification);
        this.select(notification);
        this.showMessage();
        this.setHideTimeout();
      },
    });
  }

  public get latestMessage(): Notifications | false {
    if(this.messages.length <= 0) {
      return false;
    }
    return this.messages[0];
  }

  public remove(): void {
    this.messages.splice(this.messages.indexOf(this.selected), 1);
    this.selected = this.messages.length > 0 ? this.messages[0] : null;
  }

  public select(notification: Notifications): void {
    this.showMessage();
    this.selected = notification;
  }

  public setHideTimeout() {
    if(this.currentTimeout) {
      this.clearHideTimeout();
    }

    this.currentTimeout = setTimeout(()=> {
      this.hideMessage();
    }, this.timeout);
  }

  public clearHideTimeout() {
    clearTimeout(this.currentTimeout);
  }

  private showMessage(): void {
    this.isHidden = false;
  }

  private hideMessage(): void {
    this.isHidden = true;
  }

  public get backgroundClass(): Object {
    return {
      'is-success': this.selected.type === NotificationsTypes.Success,
      'is-warning': this.selected.type === NotificationsTypes.Warning,
      'is-danger': this.selected.type === NotificationsTypes.Error,
      'is-link': this.selected.type === NotificationsTypes.Info,
    };
  }

  public tabColorClassFor(element: Notifications): Object {
    if(!element) {
      return {};
    }

    if(this.selected === element && !this.isHidden) {
      return {
        'has-background-black': true,
      }
    }

    return {
      'has-background-success': element.type === NotificationsTypes.Success,
      'has-background-warning': element.type === NotificationsTypes.Warning,
      'has-background-danger': element.type === NotificationsTypes.Error,
      'has-background-link': element.type === NotificationsTypes.Info,
    };
  }
}
