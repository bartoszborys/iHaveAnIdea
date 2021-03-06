import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NotificationsService } from 'src/app/modules/shared/modules/notifications/services/notifications/notifications.service';
import { RedirectService } from 'src/app/modules/shared/services/redirect/redirect.service';
import { NotificationsTypes } from 'src/app/modules/shared/modules/notifications/constants/notifications-types.constant';
import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';
import { Pending } from 'src/app/modules/shared/interfaces/pending.interface';
import { equalPasswordValidator } from '../../validators/equal-password.validator';
import { updateDependentControl } from '../../validators/update-dependent-control.validator';

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
      updateDependentControl('repeatPassword'),
    ]],
    repeatPassword: ['', [
      Validators.required,
      Validators.minLength(8),
      equalPasswordValidator,
    ]],
  });
  
  public registerRequest?: Pending<boolean> = null;

  public constructor(
    private builder: FormBuilder,
    private notifications: NotificationsService,
    private redirect: RedirectService,
    private auth: AuthService,
  ) { }

  public submit(): void {
    this.registerRequest = this.auth.register()
    this.registerRequest.data$.subscribe(
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
      message: "SERVER.RegisterSuccess",
      type: NotificationsTypes.Success
    });
  }

  private notifyRegisterError(): void {
    this.notifications.push({
      title: "Registration",
      message: "SERVER.RegisterFailed.default",
      type: NotificationsTypes.Error
    });
  }
}
