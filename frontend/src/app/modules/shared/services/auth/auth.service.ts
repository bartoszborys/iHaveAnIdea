import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(): Observable<Boolean> {
    return of(false).pipe(
      delay(2000),
    );
  }

  public register(): Observable<boolean> {
    return of(true).pipe(
      delay(2000),
    );
  }

  public isLogged(): Observable<Boolean> {
    return of(false).pipe(
      delay(2000),
    );
  }
}
