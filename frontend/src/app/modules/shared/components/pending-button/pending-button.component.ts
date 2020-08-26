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
      [attr.disabled]="isDisabled ? true : null" 
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

  @Input()
  public readonly isDisabled: boolean = true;

  public readonly states: typeof PendingState = PendingState;
}
