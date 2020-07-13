import { FormBuilder, Validators } from '@angular/forms';
import { equalPasswordValidator } from '../../validators/equal-password';
import { Component } from '@angular/core';
import { NotificationsService } from 'src/app/modules/shared/modules/notifications/services/notifications/notifications.service';
import { RedirectService } from 'src/app/modules/shared/services/redirect/redirect.service';
import { NotificationsTypes } from 'src/app/modules/shared/modules/notifications/constants/notifications-types.constant';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public isLoading: boolean = false;
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
  

  constructor(
    private builder: FormBuilder,
    private notifications: NotificationsService,
    private redirect: RedirectService,
  ) { }

  submit(): void {
    if(this.isLoading) {
      return;
    }

    this.isLoading = true;
    setTimeout(()=> {
      this.isLoading = false;

      this.notifications.push({
        title: "Registration",
        message: "You have been succesful registerd",
        type: NotificationsTypes.Success
      });

      this.redirect.login();
    }, 1512);
  }

}
