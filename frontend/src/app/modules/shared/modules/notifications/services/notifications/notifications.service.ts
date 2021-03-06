import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Notifications } from '../../interfaces/notifications.interface';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  public notificationsBus: Subject<Notifications> = new Subject<Notifications>();

  public push(message: Notifications): void {
    this.notificationsBus.next(message);
  }

  public get bus(): Observable<Notifications> {
    return this.notificationsBus.asObservable();
  }
}
