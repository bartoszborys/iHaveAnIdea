import { FormControl } from '@angular/forms';

export function equalPasswordValidator(fieldControl: FormControl) {
  return fieldControl.value === fieldControl?.parent?.get("password").value ? null : {
      passwordnotequals: true
  };
}