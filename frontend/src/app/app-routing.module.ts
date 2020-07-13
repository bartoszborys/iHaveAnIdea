import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./modules/main/main.module").then(m => m.MainModule),
  },
  {
    path: "sign",
    loadChildren: () => import("./modules/sign/sign.module").then(m => m.SignModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
