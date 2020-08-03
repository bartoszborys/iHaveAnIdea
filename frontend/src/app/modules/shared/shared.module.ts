import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { FormElementsModule } from './modules/form-elements/form-elements.module';
import { TranslateModule } from '@ngx-translate/core';
import { ChildTranslationModule } from 'src/app/translate/translate';

@NgModule({
  declarations: [
  ],
  exports: [
    NotificationsModule,
    FormElementsModule,
    TranslateModule,
  ],
  imports: [
    FormElementsModule,
    NotificationsModule,
    CommonModule,
    ChildTranslationModule,
  ]
})
export class SharedModule { }
