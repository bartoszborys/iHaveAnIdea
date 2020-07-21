import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { NotificationsService } from './services/notifications/notifications.service';
import { NotificationProgressBarComponent } from './components/notification-progress-bar/notification-progress-bar.component';
import { NotificationSelectTileComponent } from './components/notification-select-tile/notification-select-tile.component';



@NgModule({
  providers: [
    NotificationsService,
  ],
  declarations: [
    NotificationProgressBarComponent,
    NotificationsComponent,
    NotificationSelectTileComponent,
  ],
  exports: [
    NotificationsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class NotificationsModule { }
