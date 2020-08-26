import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { FormElementsModule } from './modules/form-elements/form-elements.module';
import { TranslateModule } from '@ngx-translate/core';
import { ChildTranslationModule } from './constants/translate.constant';
import { FormsModule } from '@angular/forms';
import { ChangeLanguageComponent } from './components/change-language/change-language.component';
import { PendingButtonComponent } from './components/pending-button/pending-button.component';

@NgModule({
  declarations: [
    ChangeLanguageComponent,
    PendingButtonComponent,
  ],
  exports: [
    ChangeLanguageComponent,
    PendingButtonComponent,
    NotificationsModule,
    FormElementsModule,
    TranslateModule,
  ],
  imports: [
    FormsModule,
    FormElementsModule,
    NotificationsModule,
    CommonModule,
    ChildTranslationModule,
  ]
})
export class SharedModule { }
