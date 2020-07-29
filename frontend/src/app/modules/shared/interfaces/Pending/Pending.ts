import { ReplaySubject, Observable, defer } from 'rxjs';
import { PendingState } from './PendingState';
import { tap, catchError } from 'rxjs/operators';

export class Pending<T> {
  public readonly states: typeof PendingState = PendingState;
  private readonly status: ReplaySubject<PendingState>;

  public data$: Observable<T>;
  public status$: Observable<PendingState>;

  constructor(private data: Observable<T>) {
    this.status = new ReplaySubject<PendingState>();
    this.status$ = this.status.asObservable();
    this.data$ = this.getData();
  }

  private getData(): Observable<T> {
    const data = this.data.pipe(
      catchError(error => {
        this.status.next(this.states.ERROR);
        throw error;
      }),
      tap(_ => this.status.next(this.states.SUCCESS)),
    )

    return defer(()=>{
      this.status.next(this.states.LOADING);
      return data;
    });
  }
}