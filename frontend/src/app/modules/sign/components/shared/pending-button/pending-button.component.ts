import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { PendingState } from 'src/app/modules/shared/interfaces/Pending/PendingState';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pending-button',
  template: `
  <button
    translate
    type="submit" 
    class="button is-primary mt-5" 
    [class.is-loading]="(status$ | async) === states.LOADING">
    {{description}}
  </button>
  `,
  styleUrls: ['./pending-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PendingButtonComponent {
  @Input()
  public readonly description: string = "";

  @Input()
  public readonly status$?: Observable<PendingState>;

  public readonly states: typeof PendingState = PendingState;
}
