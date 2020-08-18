import { FormControl, AbstractControl } from '@angular/forms';

export function updateDependentControl(controlName: string): (control: FormControl) => null {
  return (control: FormControl) => {
    control?.parent?.get(controlName)?.updateValueAndValidity();
    return null;
  };
}