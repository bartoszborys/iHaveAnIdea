import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { RedirectService } from 'src/app/modules/shared/services/redirect/redirect.service';
import { NotificationsTypes } from 'src/app/modules/shared/modules/notifications/constants/notifications-types.constant';
import { NotificationsService } from 'src/app/modules/shared/modules/notifications/services/notifications/notifications.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  public signInForm = this.builder.group({
    email: ['', [
      Validators.required,
      Validators.email,
    ]],
    password: ['', [
      Validators.required,
    ]],
  });

  constructor(
    private builder: FormBuilder,
    private redirect: RedirectService,
    private notifications: NotificationsService,
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.notifications.push({
      title: "Registration",
      message: "Koalicja Odnowy Rzeczypospolitej Wolność i Nadzieja (KORWiN, Wolność) – polska prawicowa, konserwatywno-liberalna i eurosceptyczna[4] partia polityczna założona w styczniu 2015 przez część działaczy Kongresu Nowej Prawicy skupionych wokół Janusza Korwin-Mikkego, zarejestrowana sądownie 23 czerwca 2015. 8 października 2016 ",
      type: NotificationsTypes.Error
    });

    return;
    this.redirect.main();
  }
}
