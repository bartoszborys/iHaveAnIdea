import { Component, OnInit, Input, forwardRef, Host, Optional, SkipSelf } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-reactive-input',
  templateUrl: './reactive-input.component.html',
  styleUrls: ['./reactive-input.component.scss'],
  providers: [{ 
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => ReactiveInputComponent), 
      multi: true 
  }],
})
export class ReactiveInputComponent implements ControlValueAccessor, OnInit {
  @Input() 
  public readonly formControlName: string; 
  
  @Input()
  public readonly description: string = "";
  
  @Input()
  public readonly type: string = "text";

  public value: string = "";
  public control?: AbstractControl;
  public isDisabled: boolean | null = null;

  public touchHandler: (value: string) => void = () => {};
  public changeHandler: (value: string) => void = () => {};

  public constructor(
    @Optional() 
    @Host() 
    @SkipSelf()
    private container?: ControlContainer
  ) { }

  public ngOnInit(): void {
    if(!this.container) {
      throw new Error("Container not set!");
    }
    this.control = this.container.control.get(this.formControlName);
  }

  public get isError(): boolean {
    return this.control?.invalid && this.control.dirty && this.control.touched;
  }

  public get isSuccess(): boolean {
    return this.control?.valid && this.control.dirty && this.control.value;
  }

  public writeValue(value?: string): void {
    if(!value) {
      return;
    }
    this.value = value;
  }

  public registerOnChange(changeHandler: (value: string) => void): void {
    this.changeHandler = changeHandler;
  }

  public registerOnTouched(touchHandler: (value: string) => void): void {
    this.touchHandler = touchHandler;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled ? true : null;
  }
}
