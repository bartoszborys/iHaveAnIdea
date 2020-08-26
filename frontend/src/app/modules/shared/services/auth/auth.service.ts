import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Pending } from '../../interfaces/pending.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(): Pending<boolean> {
    return new Pending(of(false)
    .pipe(
      delay(2000),
    ));
  }

  public register(): Pending<boolean> {
    return new Pending(of(false)
      .pipe(
        delay(2000),
      ));
  }

  public isLogged(): Pending<Boolean> {
    return new Pending(of(false)
      .pipe(
        delay(2000),
      ));
  }
}