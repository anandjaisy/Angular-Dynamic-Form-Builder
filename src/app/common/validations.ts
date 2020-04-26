import { AbstractControl, ValidationErrors } from '@angular/forms';
export class CustomValidator {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if (control.value != null || control.value != undefined) {
            if ((control.value as string).indexOf(' ') >= 0) {
                return { cannotContainSpace: true }
            }
        }
        return null;
    }
}