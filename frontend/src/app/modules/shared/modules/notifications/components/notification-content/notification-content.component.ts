import { Component, OnInit, Input } from '@angular/core';
import { Notifications } from '../../interfaces/notifications.interface';

@Component({
  selector: 'app-notification-content',
  templateUrl: './notification-content.component.html',
  styleUrls: ['./notification-content.component.scss']
})
export class NotificationContentComponent {
  @Input()
  public readonly notification?: Notifications;

  @Input()
  public readonly isHidden: boolean = false;
}
