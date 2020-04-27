import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ComponentType } from '../view-models/component-type.enum';
import { IMeta } from '../view-models/imeta';
/**
 * @description
 * Base form component initialized to create form controls, set validation, submit.
 *
 * @usageNotes
 * The following snippet shows how a component can implement this abstract class to
 * define its own initialization method.
 * ```ts
 *  export class InputComponent extends BaseFormComponent<any> implements OnInit {
 *     constructor(fb : FormBuilder) {
 *        super(fb);
 *        this.defineForm();
 *    }
 *    protected defineForm(): void { 
 *    }
 *    ngOnInit(): void {
 *      this.form = this.createControls();
 *    }
 *    protected getDatasource(): Observable<any> {
 *      return of();
 *    }
 *    protected submitDatasource(model: any): Observable<any> {
 *      console.log(model);
 *      return of(model);
 *    }
 * ```
 */
export abstract class BaseFormComponent<T>{
  public form: FormGroup;
  protected abstract defineForm(): void;
  protected abstract getDatasource(): Observable<T>;
  protected abstract submitDatasource(model: T): Observable<T>;
  public dataSource: T = null;
  public controlsConfig: IMeta;

  constructor(private fb: FormBuilder) {
  }
  /**
    * @description
    * Method evoke on when the form is submitted.
    * @returns submitDatasource() method with form data if valid otherwise form invalid.
  */
  public onSubmit() {
    if (this.form.valid) {
      this.submitDatasource(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }
  /**
    * @description
    * Private method to validate all form controls before is form submited.
    * @param formGroup Validate form group.
    * @returns Groups of controls added to the form builder.
  */
  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
  /**
    * @description
    * Create the reactive form controls
    * @returns Groups of controls added to the form builder.
  */
   protected createControls() {
    const group = this.fb.group({});
    this.controlsConfig.componentConfig.forEach(field => {
      if (field.componentType === ComponentType.Button) return;
      const control = this.fb.control(
        {value: field.componentProperty.value, disabled: field.componentProperty.disabled},
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.formControlName, control);
    });
    return group;
  }
  /**
    * @description
    * Private method to bind the validation to the form controls on form submit.
    * @param validations Push the validation to the controls.
    * @returns Validation.
  */
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
  /**
    * @description
    * Reset fild values to default or specify some value.
    * @param defaultValues Specify the specific value to set to the controls.
    * @returns void.
  */
  public reset(defaultValues?: any): void {
    this.form.reset(defaultValues);
  }
  /**
    * @description
    * Reset specific fild Errors.
    * @param name Name of the field to reset the error.
    * @returns void.
  */
  resetFieldErrors(name: string): void {
    this.form.get(name).setErrors(null);
  }
  /**
    * @description
    * Get the controls value from the form.
    * @returns Form controls values.
  */
  get value() {
    return this.form.value;
  }
}
