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

  public latestErrorCache: string = "";

  public get latestErrorName(): string | null {
    const errors = this.control.errors;
    const latestError = errors && Object.keys(errors)[0];

    if(latestError) {
      this.latestErrorCache = latestError;
      return latestError;
    }

    return this.latestErrorCache;
  }

  public get isError(): boolean {
    return this.control?.invalid && this.control.dirty && this.control.touched;
  }
}