import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ComponentType } from '../view-models/component-type.enum';
import { IMeta, IComponentConfig } from '../view-models/imeta';
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
 *    protected submitDatasource(model: any): Observable<any> {
 *      console.log(model);
 *      return of(model);
 *    }
 * ```
 */
export abstract class BaseFormComponent<T>{
  public form: FormGroup;
  protected abstract defineForm(): void;
  protected abstract submitDatasource(model: T): Observable<T>;
  public dataSource: T = null;
  public controlsConfig: IMeta;
  public showLoading: boolean = false;
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
      this.bindControl(field, group);
      field.nextedLayoutConfig?.componentConfig.forEach(field => {
        this.bindControl(field, group);
      });
    });
    return group;
  }
  /**
      * @description
      * Private method to bind the form control.
      * @param field field to bind.
      * @param group group to add.
  */
  private bindControl(field, group) {
    if (field.componentType === ComponentType.Button) return;
    const control = this.fb.control(
      { value: field.componentProperty.value, disabled: field.componentProperty.disabled },
      this.bindValidations(field.validations || [])
    );
    group.addControl(field.formControlName, control);
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
  /**
    * @description
    * Updating parts of the data model.
    * Use the patchValue() method to replace any properties defined in the object that have changed in the form model.
    * @returns Form controls values.
    * @param value The object that matches the structure of the group.
    * @param options Configuration options that determine how the control propagates changes and
    * emits events after the value is patched.
    * `onlySelf`: When true, each change only affects this control and not its parent. Default is
    * true.
    * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
    * `valueChanges`
    *  @usageNotes
    * The following snippet shows how a component can implement this abstract class to
    * define its own initialization method.
    * ```ts
    *   this.form.patchValue({
    *     name: 'Todd Motto',
    *     event: {
    *       title: 'AngularCamp 2016',
    *       location: 'Barcelona, Spain'
    *     }
    *   });
    * ```
    */
  protected patchValue(value: { [key: string]: any; }, options?: { onlySelf?: boolean; emitEvent?: boolean; }) {
    return this.form.patchValue(value, options);
  }

  /**
    * @description
    * Updating parts of the data model.
    * Use the setValue() method to set a new value for an individual control. The setValue() method strictly adheres to the structure of the form group and replaces the entire value for the control.
    * @returns Form controls values.
    * @param value The object that matches the structure of the group.
    * @param options Configuration options that determine how the control propagates changes and
    * emits events after the value is patched.
    * `onlySelf`: When true, each change only affects this control and not its parent. Default is
    * true.
    * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
    * `valueChanges`
    *  @usageNotes
    * The following snippet shows how a component can implement this abstract class to
    * define its own initialization method.
    * ```ts
    *   this.form.setValue({
    *     name: 'Todd Motto',
    *     event: {
    *       title: 'AngularCamp 2016',
    *       location: 'Barcelona, Spain'
    *     }
    *   });
    * ```
    */
  protected setValue(value: { [key: string]: any; }, options?: { onlySelf?: boolean; emitEvent?: boolean; }) {
    return this.form.setValue(value, options);
  }
  /**
   * @description
   * Dynamically remove the form control.
   * @param index Index of item.
   * @usageNotes
   * The following snippet shows how to remove the form control from Froup Group
   * ```ts
   *    removeControl(1);
   * ```
   */
  protected removeControl(index: number) {
      this.form.removeControl(this.controlsConfig.componentConfig[index].formControlName);
      this.controlsConfig.componentConfig.splice(index, 1);
  }
  /**
   * @description
   * Dynamically add the form control.
   * @param configToAdd Configuration of the form control.
   *  @usageNotes
   * The following snippet shows how a component can implement this abstract class to
   * define its own initialization method.
   * ```ts
   *   var configToadd = {
   *    componentProperty: {
   *      label: "Outline Auto complete",
   *      options: [{ value: 'Extra-cheese', viewValue: 'Extra cheese' },
   *      { value: 'Bellsprout', viewValue: 'Bellsprout' },
   *      { value: 'Mushroom', viewValue: 'Mushroom' },
   *      { value: 'Onion', viewValue: 'Onion' },
   *      { value: 'Pepperoni', viewValue: 'Pepperoni' },
   *      { value: 'Sausage', viewValue: 'Sausage' },
   *      { value: 'Tomato', viewValue: 'Tomato' }],
   *      appearance: Appearance.Outline,
   *      color: 'accent'
   *    },
   *    componentType: ComponentType.AutoComplete,
   *    formControlName: "test"
   *  };
   *  this.addControl(configToadd);
   * ```
   */
  protected addControl(configToAdd: IComponentConfig[]) {
    configToAdd.forEach(configToAdd => {
      this.form.addControl(configToAdd.formControlName,
        new FormControl({ value: configToAdd.componentProperty.value, disabled: configToAdd.componentProperty.disabled },
          this.bindValidations(configToAdd.validations)));
      this.controlsConfig.componentConfig.push(configToAdd);
    });
  }
}
