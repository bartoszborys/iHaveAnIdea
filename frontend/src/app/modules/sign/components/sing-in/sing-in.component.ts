import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { RedirectService } from 'src/app/modules/shared/services/redirect/redirect.service';
import { NotificationsTypes } from 'src/app/modules/shared/modules/notifications/constants/notifications-types.constant';
import { NotificationsService } from 'src/app/modules/shared/modules/notifications/services/notifications/notifications.service';
import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';
import { Pending } from 'src/app/modules/shared/interfaces/pending.interface';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent {
  public signInForm = this.builder.group({
    email: ['', [
      Validators.required,
      Validators.email,
    ]],
    password: ['', [
      Validators.required,
    ]],
  });

  public loginRequest?: Pending<boolean> = null;

  public constructor(
    private builder: FormBuilder,
    private redirect: RedirectService,
    private notifications: NotificationsService,
    private auth: AuthService,
  ) { }

  public submit(): void {
    this.loginRequest = this.auth.login();
    this.loginRequest.data$.subscribe(isSuccess => this.loginAttempt(isSuccess));
  }

  private loginAttempt(isSuccess: Boolean): void {
    if(!isSuccess) {
      return this.notifyLoginError();
    }
    this.redirect.main();
  }

  private notifyLoginError(): void {
    this.notifications.push({
      title: "ConnectionFailed",
      message: "SERVER.ConnectionFailed",
      type: NotificationsTypes.Error
    });
  }
}
