import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-element-info',
  templateUrl: './reactive-element-info.component.html',
  styleUrls: ['./reactive-element-info.component.scss']
})
export class ReactiveElementInfoComponent {  
  @Input() 
  public readonly control: AbstractControl

  public get latestErrorName(): string | null {
    const errors = this.control.errors;
    return errors && Object.keys(errors)[0];
  }

  public get isError(): boolean {
    return this.control?.invalid && this.control.dirty && this.control.touched;
  }
}