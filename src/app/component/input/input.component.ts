import { Component, OnInit, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, ComponentPosition, AlignmentLayoutDirection } from 'projects/falcon-core/src/lib/view-models/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { IGenericHttpClient } from 'projects/falcon-core/src/public-api';
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
  constructor(fb: FormBuilder, private igenericHttpClient: IGenericHttpClient<any>) {
    super(fb);
    this.defineForm();
  }

  protected defineForm(): void {
    this.controlsConfig =
    {
      layoutConfig: {
        layoutDirection: ComponentPosition.Row,
        fxLayoutGap: "10px",
        alignmentLayoutDirectionHorizontal: AlignmentLayoutDirection.SpaceAround,
        alignmentLayoutDirectionVertical: AlignmentLayoutDirection.SpaceAround
      },
      componentConfig: [{
        componentProperty: {
          name: "Legacy form field",
          appearance: Appearance.Legacy,
          placeHolder: "Legacy form field",
          attrType: InputTypes.Text
        },
        componentType: ComponentType.TextBox,
        formControlName: "LegacyFormField"
      },
      {
        componentProperty: {
          name: "Standard form field",
          appearance: Appearance.Standard,
          placeHolder: "Standard form field",
          attrType: InputTypes.Text
        },
        componentType: ComponentType.TextBox,
        formControlName: "standardFormField"
      },
      {
        componentProperty: {
          name: "Fill form field",
          appearance: Appearance.Fill,
          placeHolder: "Fill form field",
          attrType: InputTypes.Text
        },
        componentType: ComponentType.TextBox,
        formControlName: "fillFormField"
      },
      {
        componentProperty: {
          name: "Outline form field",
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

  codeGeneratorClick() {
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.FormFieldAppearanceVariant_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.FormFieldAppearanceVariant_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
