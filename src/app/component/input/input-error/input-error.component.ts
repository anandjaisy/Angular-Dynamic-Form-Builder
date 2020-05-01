import { Component, OnInit, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, FxLayout, AlignmentLayoutDirection, Floatinglabel } from 'projects/falcon-core/src/lib/view-models/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';
import { CustomValidator } from 'src/app/common/validations';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss']
})
export class InputErrorComponent extends BaseFormComponent<any> implements OnInit {
  codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();
  constructor(fb: FormBuilder) {
    super(fb);
    this.defineForm();
  }

  protected defineForm(): void {
    this.controlsConfig =
    {
      layoutConfig: {
        fxLayout: FxLayout.Row,
        fxLayoutGap: "10px",
        fxLayoutAlignHorizontal: AlignmentLayoutDirection.SpaceAround,
        fxLayoutAlignVertical: AlignmentLayoutDirection.SpaceAround
      },
      componentConfig: [{
        componentProperty: {
          label: "Required Validation *",
          appearance: Appearance.Legacy,
          placeHolder: "Required Validation *",
          attrType: InputTypes.Text
        },
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Required Field"
          }],
        componentType: ComponentType.TextBox,
        formControlName: "Required Validation"
      },
      {
        componentProperty: {
          label: "Pattern Validation *",
          appearance: Appearance.Outline,
          placeHolder: "Pattern Validation *",
          attrType: InputTypes.Text
        },
        validations: [
          {
            name: "pattern",
            validator: Validators.pattern(
              "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
            ),
            message: "Invalid email"
          }
        ],
        componentType: ComponentType.TextBox,
        formControlName: "patternValidation"
      },
      {
        componentProperty: {
          label: "Required & Pattern Validation *",
          appearance: Appearance.Outline,
          placeHolder: "Required & Pattern Validation *",
          attrType: InputTypes.Text
        },
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Required Field"
          },
          {
            name: "pattern",
            validator: Validators.pattern(
              "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
            ),
            message: "Invalid email"
          },
          {
            name: "cannotContainSpace",
            validator: CustomValidator.cannotContainSpace,
            message: "can not Contain Space"
          }
        ],
        componentType: ComponentType.TextBox,
        formControlName: "Required&PatternValidation"
      },
      {
        componentProperty: {
          label: "Custom Validation *",
          appearance: Appearance.Outline,
          placeHolder: "Custom Validation",
          attrType: InputTypes.Text
        },
        validations: [
          {
            name: "cannotContainSpace",
            validator: CustomValidator.cannotContainSpace,
            message: "can not Contain Space"
          }
        ],
        componentType: ComponentType.TextBox,
        formControlName: "customValidation"
      }]
    }
  }

  ngOnInit(): void {
    this.form = this.createControls();
  }

  protected getDatasource(): Observable<any> {
    return of();
  }
  protected submitDatasource(model: any): Observable<any> {
    console.log(model);
    return of(model);
  }
  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.FormFieldError_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.FormFieldError_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

}
