import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignRoutingModule } from './sign-routing.module';
import { SignComponent } from './sign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SingInComponent } from './components/sing-in/sing-in.component';

@NgModule({
  declarations: [
    SignComponent,
    SignUpComponent,
    SingInComponent, 
  ],
  imports: [
    CommonModule,
    SignRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class SignModule { }
