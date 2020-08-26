import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthorizedGuard } from './guards/user-authorized.guard';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./modules/main/main.module").then(m => m.MainModule),
    canActivate: [UserAuthorizedGuard],
  },
  {
    path: "sign",
    loadChildren: () => import("./modules/sign/sign.module").then(m => m.SignModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
