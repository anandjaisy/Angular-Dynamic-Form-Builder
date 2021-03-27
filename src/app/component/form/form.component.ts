import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlignmentLayoutDirection, Appearance, BaseFormComponent, ComponentType, FxLayout, InputTypes } from 'projects/falcon-core/src/public-api';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends BaseFormComponent<any> implements OnInit {
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();
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
          fxLayoutAlignHorizontal: AlignmentLayoutDirection.SpaceAround,
          fxLayoutAlignVertical: AlignmentLayoutDirection.SpaceAround,
          componentConfig: [{
            componentProperty: {
              label: "Legacy form field",
              appearance: Appearance.Legacy,
              placeHolder: "Legacy form field",
              attrType: InputTypes.Text
            },
            validations: [
              {
                name: "required",
                validator: Validators.required,
                message: "Required Field"
              }],
            componentType: ComponentType.TextBox,
            formControlName: "LegacyFormField"
          },
          {
            componentProperty: {
              label: "Submit",
              appearance: Appearance.Raised,
              color: 'primary',
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

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.FormFieldAppearanceVariant_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.FormFieldAppearanceVariant_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
