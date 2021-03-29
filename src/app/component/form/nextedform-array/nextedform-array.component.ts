import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlignmentLayoutDirection, Appearance, BaseFormComponent, ComponentType, FxLayout, InputTypes } from 'projects/falcon-core/src/public-api';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nextedform-array',
  templateUrl: './nextedform-array.component.html',
  styleUrls: ['./nextedform-array.component.scss']
})
export class NextedformArrayComponent extends BaseFormComponent<any> implements OnInit {

  constructor(fb: FormBuilder) {
    super(fb);
    this.defineForm();
  }

  ngOnInit(): void {
    this.form = this.createControls();
  }

  protected defineForm(): void {
    this.controlsConfig =
    {
      container: {
        fxLayout: FxLayout.Column,
        fxLayoutAlignHorizontal: AlignmentLayoutDirection.SpaceBetween,
        fxLayoutAlignVertical: AlignmentLayoutDirection.None,
        layoutConfig: [{
          fxLayout: FxLayout.Row,
          fxLayoutGap: "10px",
          fxLayoutAlignHorizontal: AlignmentLayoutDirection.SpaceBetween,
          fxLayoutAlignVertical: AlignmentLayoutDirection.SpaceBetween,
          componentConfig: [{
            componentProperty: {
              label: "Legacy form field",
              appearance: Appearance.Legacy,
              placeHolder: "Legacy form field",
              attrType: InputTypes.Text,
              formArray: [{
                fxLayout: FxLayout.Row,
                fxLayoutGap: "10px",
                fxLayoutAlignHorizontal: AlignmentLayoutDirection.SpaceBetween,
                fxLayoutAlignVertical: AlignmentLayoutDirection.SpaceBetween,
                componentConfig: [{
                  componentProperty: {
                    label: "First Element",
                    appearance: Appearance.Legacy,
                    placeHolder: "firstElement",
                    attrType: InputTypes.Text,
                    formArray: [{
                      fxLayout: FxLayout.Row,
                      fxLayoutGap: "10px",
                      fxLayoutAlignHorizontal: AlignmentLayoutDirection.SpaceBetween,
                      fxLayoutAlignVertical: AlignmentLayoutDirection.SpaceBetween,
                      componentConfig: [{
                        componentProperty: {
                          label: "First Element First Next",
                          appearance: Appearance.Legacy,
                          placeHolder: "First Element First Next",
                          attrType: InputTypes.Text
                        },
                        validations: [
                          {
                            name: "required",
                            validator: Validators.required,
                            message: "Required Field"
                          }],
                        componentType: ComponentType.TextBox,
                        formControlName: "firstElementFirstNext"
                      }]
                    }]
                  },
                  validations: [
                    {
                      name: "required",
                      validator: Validators.required,
                      message: "Required Field"
                    }],
                  componentType: ComponentType.TextBox,
                  formControlName: "firstElement"
                },
                {
                  componentProperty: {
                    label: "Second Element",
                    appearance: Appearance.Legacy,
                    placeHolder: "Second Element",
                    attrType: InputTypes.Text
                  },
                  validations: [
                    {
                      name: "required",
                      validator: Validators.required,
                      message: "Required Field"
                    }],
                  componentType: ComponentType.TextBox,
                  formControlName: "secondElement"
                }]
              }]
            },
            componentType: ComponentType.TextBox,
            formControlName: "nextedFormFields"
          },
          {
            componentProperty: {
              label: "Submit",
              appearance: Appearance.Raised,
              color: 'primary',
              attrType: InputTypes.Submit
            },
            componentType: ComponentType.Button,
          }]
        }]
      }
    }
  }

  protected submitDatasource(model: any): Observable<any> {
    console.log(model);
    return of(model);
  }
}
