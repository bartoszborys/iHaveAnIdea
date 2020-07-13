import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { FormElementsModule } from './modules/form-elements/form-elements.module';

@NgModule({
  declarations: [
  ],
  exports: [
    NotificationsModule,
    FormElementsModule,
  ],
  imports: [
    FormElementsModule,
    NotificationsModule,
    CommonModule,
  ]
})
export class SharedModule { }
