import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { ComponentType } from '../model/component-type.enum';
import { IMeta, IComponentConfig, ILayoutConfig } from '../model/imeta';
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
  constructor(protected fb: FormBuilder) {
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
    this.form.markAllAsTouched();
  }
  /**
    * @description
    * Create the reactive form controls
    * @returns Groups of controls added to the form builder.
  */
  protected createControls() {
    const group = this.fb.group({});
    this.controlsConfig.container.layoutConfig.forEach((layout, index) => {
      layout.componentConfig.forEach(controls => {
        this.bindControl(controls, group, index)
      })
    });
    return group;
  }
  /**
      * @description
      * Private method to bind the form control.
      * @param field field to bind.
      * @param group group to add.
      * @param index index of the layout
  */
  private bindControl(componentConfig: IComponentConfig, group, index: number) {
    if (componentConfig.componentType === ComponentType.Button) return;
    var control = null;
    if (componentConfig.componentProperty.formArray !== undefined) {
      control = (componentConfig.componentProperty.formArray.length > 0)
        ? this.fb.array([this.createFormArrayGroup(componentConfig.componentProperty.formArray[index].componentConfig)]) :
        this.fb.array([], this.bindValidations(componentConfig.validations || []))
    } else {
      control = this.fb.control({ value: componentConfig.componentProperty.value, disabled: componentConfig.componentProperty.disabled },
        this.bindValidations(componentConfig.validations || []));
    }
    group.addControl(componentConfig.formControlName, control);
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
   * Create an form array element
   * @param layoutConfig layout of form array
   * @returns Form array group
   */
  private createFormArrayGroup(componentConfig: IComponentConfig[]): FormGroup {
    var formGroup: FormGroup = this.fb.group({});
    componentConfig.forEach((item, index) => {
      var control = null;
      if (item.componentProperty.formArray !== undefined) {
        control = item.componentProperty.formArray.length > 0
          ? this.fb.array([this.createFormArrayGroup(item.componentProperty.formArray[index].componentConfig)], this.bindValidations(item.validations || [])) :
          this.fb.array([], this.bindValidations(item.validations || []))
      } else {
        control = this.fb.control({ value: item.componentProperty.value, disabled: item.componentProperty.disabled },
          this.bindValidations(item.validations || []));
      }
      formGroup.addControl(item.formControlName, control);
    });
    return formGroup;
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
  protected removeControl(layoutIndex: number, index: number) {
    this.form.removeControl(this.controlsConfig.container.layoutConfig[layoutIndex].componentConfig[index].formControlName);
    this.controlsConfig.container.layoutConfig[layoutIndex].componentConfig.splice(index, 1);
  }
  /**
   * @description
   * Dynamically add the form control.
   * @param configToAdd Configuration of the form control.
   * @param index Add controls to the specific index.
   * @usageNotes
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
   *  this.addControl(configToadd); or this.addControl(configToadd,1);
   * ```
   */
  protected addControl(layoutToAdd?: ILayoutConfig[], index?: number) {
    layoutToAdd.forEach(layout => {
      layout.componentConfig.forEach(control => {
        this.form.addControl(control.formControlName,
          new FormControl({ value: control.componentProperty.value, disabled: control.componentProperty.disabled },
            this.bindValidations(control.validations || [])));
      })
      index !== null ? this.controlsConfig.container.layoutConfig.splice(index, 0, layout) : this.controlsConfig.container.layoutConfig.push(layout);
    });
  }
}
