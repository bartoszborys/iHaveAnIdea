import { ValidatorFn, FormGroup, ValidationErrors, AbstractControl, FormControl } from '@angular/forms';

export function equalPasswordValidator(fieldControl: FormControl) {
  return fieldControl.value === fieldControl?.parent?.get("password").value ? null : {
      passwordnotequals: true
  };
}

const equalPasswordValidator2: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
    const password = group.get('password');
    const passwordRepeat = group.get('repeatPassword');

    const isPasswordNotEquals = password && passwordRepeat && password.value !== passwordRepeat.value;

    setPasswordNotEqualErrorFor(password, isPasswordNotEquals);
    setPasswordNotEqualErrorFor(passwordRepeat, isPasswordNotEquals);

    return null;
};

const setPasswordNotEqualErrorFor = (control: AbstractControl, isPasswordNotEquals: boolean) => {
    if(isPasswordNotEquals && control.valid) {
        control.setErrors({...control.errors, passwordnotequals: true});
    }

    if(!isPasswordNotEquals && control.hasError('passwordnotequals')) {
        delete control?.errors?.passwordnotequals;
    }

    if(control?.errors && Object.keys(control.errors).length === 0) {
        control.setErrors(null);
    }
}