import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { NotificationsService } from './services/notifications/notifications.service';
import { NotificationProgressBarComponent } from './components/notification-progress-bar/notification-progress-bar.component';
import { NotificationSelectTileComponent } from './components/notification-select-tile/notification-select-tile.component';
import { NotificationContentComponent } from './components/notification-content/notification-content.component';
import { ChildTranslationModule } from '../../constants/translate.constant';

@NgModule({
  providers: [
    NotificationsService,
  ],
  declarations: [
    NotificationProgressBarComponent,
    NotificationsComponent,
    NotificationSelectTileComponent,
    NotificationContentComponent,
  ],
  exports: [
    NotificationsComponent,
  ],
  imports: [
    CommonModule,
    ChildTranslationModule,
  ]
})
export class NotificationsModule { }
