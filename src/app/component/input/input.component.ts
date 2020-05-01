import { Component, OnInit, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, FxLayout, AlignmentLayoutDirection, Floatinglabel } from 'projects/falcon-core/src/lib/view-models/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BaseFormComponent<any> implements OnInit {
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel : AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();
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
          label: "Legacy form field",
          appearance: Appearance.Legacy,
          placeHolder: "Legacy form field",
          attrType: InputTypes.Text
        },
        componentType: ComponentType.TextBox,
        formControlName: "LegacyFormField"
      },
      {
        componentProperty: {
          label: "Standard form field",
          appearance: Appearance.Standard,
          placeHolder: "Standard form field",
          attrType: InputTypes.Text
        },
        componentType: ComponentType.TextBox,
        formControlName: "standardFormField"
      },
      {
        componentProperty: {
          label: "Fill form field",
          appearance: Appearance.Fill,
          placeHolder: "Fill form field",
          attrType: InputTypes.Text
        },
        componentType: ComponentType.TextBox,
        formControlName: "fillFormField"
      },
      {
        componentProperty: {
          label: "Outline form field",
          appearance: Appearance.Outline,
          placeHolder: "Outline form field",
          attrType: InputTypes.Text
        },
        componentType: ComponentType.TextBox,
        formControlName: "outlineFormField"
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
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.FormFieldAppearanceVariant_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.FormFieldAppearanceVariant_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
