import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignComponent } from './sign.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SingInComponent } from './components/sing-in/sing-in.component';


const routes: Routes = [
  {
    path: "",
    component: SignComponent,
    children: [
      {
        path: "",
        component: SingInComponent,
      },
      {
        path: "up",
        component: SignUpComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignRoutingModule { }
