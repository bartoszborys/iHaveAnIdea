import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../modules/shared/services/auth/auth.service';
import { RedirectService } from '../modules/shared/services/redirect/redirect.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserAuthorizedGuard implements CanActivate {
  public constructor(
    private auth: AuthService,
    private redirect: RedirectService,
  ) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isLogged; 
  }

  private get isLogged(): Observable<boolean> {
    return this.auth.isLogged().data$.pipe(
      tap(isLogged => {
        if(!isLogged){
          this.redirect.login();
        }
        return isLogged;
      })
    )
  }
}
