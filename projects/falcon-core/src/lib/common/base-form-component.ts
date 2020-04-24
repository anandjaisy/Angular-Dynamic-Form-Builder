import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {EventEmitter} from "@angular/core";
import { Observable } from 'rxjs';
import { ComponentType } from '../view-models/component-type.enum';
import { IMeta } from '../view-models/imeta';
export abstract class BaseFormComponent<T> {
    public form: FormGroup;
    protected abstract defineForm(): void;
    protected abstract getDatasource(): Observable<T>;
    protected abstract submitDatasource(model: T): EventEmitter<T>;
    public dataSource: T = null;
    public regConfig: IMeta[] = [];
    get value() {
      return this.form.value;
    }

    constructor(private fb: FormBuilder){
    }
    
    public onSubmit() {
        if (this.form.valid) {
          this.submitDatasource(this.form.value);
        } else {
          this.validateAllFormFields(this.form);
        }
      }


      private validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
          const control = formGroup.get(field);
          control.markAsTouched({ onlySelf: true });
        });
      }

      public createControl() {
        const group = this.fb.group({});
        this.regConfig.forEach(field => {
          if (field.componentType === ComponentType.Button) return;
          const control = this.fb.control(
            field.value,
            this.bindValidations(field.validations || [])
          );
          group.addControl(field.formControlName, control);
        });
        return group;
      }
    
      private bindValidations(validations: any) {
        if (validations.length > 0) {
          const validList = [];
          validations.forEach(valid => {
            validList.push(valid.validator);
          });
          return Validators.compose(validList);
        }
        return null;
      }
}
