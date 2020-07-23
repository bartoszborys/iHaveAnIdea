import { FormBuilder, Validators } from '@angular/forms';
import { equalPasswordValidator } from '../../validators/equal-password';
import { Component } from '@angular/core';
import { NotificationsService } from 'src/app/modules/shared/modules/notifications/services/notifications/notifications.service';
import { RedirectService } from 'src/app/modules/shared/services/redirect/redirect.service';
import { NotificationsTypes } from 'src/app/modules/shared/modules/notifications/constants/notifications-types.constant';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public signUpForm = this.builder.group({
    email: ['', [
      Validators.required,
      Validators.email,
    ]],
    firstName: [''],
    lastName: [''],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
    ]],
    repeatPassword: ['', [
      Validators.required,
      Validators.minLength(8),
    ]],
  }, { 
    validators: equalPasswordValidator, 
  });
  
  public register$?: Subscription = null;

  public constructor(
    private builder: FormBuilder,
    private notifications: NotificationsService,
    private redirect: RedirectService,
    private auth: AuthService,
  ) { }

  public get isRegistrationPending(): boolean {
    if(!this.register$) {
      return false;
    }
    return !this.register$?.closed;
  }

  public submit(): void {
    this.register$ = this.auth.register().subscribe(
      (isSuccess: boolean) => this.registerAttempt(isSuccess),
    );
  }

  private registerAttempt(isSuccess: Boolean): void {
    if(!isSuccess) {
      return this.notifyRegisterError();
    }
    this.notifyRegisterSuccess();
    this.redirect.login();
  }

  private notifyRegisterSuccess(): void {
    this.notifications.push({
      title: "Registration",
      message: "You have been succesful registerd!",
      type: NotificationsTypes.Success
    });
  }

  private notifyRegisterError(): void {
    this.notifications.push({
      title: "Registration",
      message: "Account couldn't be created!",
      type: NotificationsTypes.Error
    });
  }
}
