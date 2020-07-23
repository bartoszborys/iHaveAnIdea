import { Component, Input } from '@angular/core';
import { NotificationsTypes } from '../../constants/notifications-types.constant';

@Component({
  selector: 'app-notification-select-tile',  
  template: `<div class="tile" [class.tile--selected]="isSelected" [ngClass]="backgroundClass"></div>`,
  styleUrls: ['./notification-select-tile.component.scss']
})
export class NotificationSelectTileComponent {
  @Input()
  public readonly isSelected: boolean = false;

  @Input()
  public set type(type: NotificationsTypes) {
    const backgroundClass = this.getBackgroundColor(type);

    if(backgroundClass === this.backgroundClass) {
      return;
    }

    this.backgroundClass = backgroundClass;
  };

  public backgroundClass: string = null;

  public getBackgroundColor(type: NotificationsTypes): string {
    switch(type) {
      case NotificationsTypes.Success:
        return 'has-background-success';

      case NotificationsTypes.Warning:
        return 'has-background-warning';

      case NotificationsTypes.Error:
        return 'has-background-danger';

      case NotificationsTypes.Info:
        return 'has-background-link';
      
      default:
        throw new Error("Unknown notification type");
    }
  }
}
