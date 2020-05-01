import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, FxLayout, AlignmentLayoutDirection, Floatinglabel } from 'projects/falcon-core/src/lib/view-models/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-input-hint',
  templateUrl: './input-hint.component.html',
  styleUrls: ['./input-hint.component.scss']
})
export class InputHintComponent extends BaseFormComponent<any> implements OnInit {
  codeGeneratorEnable: boolean = false;
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
          label: "Legacy form field HINT",
          appearance: Appearance.Legacy,
          placeHolder: "Form field HINT",
          attrType: InputTypes.Text,
          hint :"Legacy form field HINT"
        },
        componentType: ComponentType.TextBox,
        formControlName: "legacyFormFieldHint"
      },
      {
        componentProperty: {
          label: "Outline form field HINT",
          appearance: Appearance.Outline,
          placeHolder: "Outline form field HINT",
          attrType: InputTypes.Text,
          hint: "Outline form field HINT"
        },
        componentType: ComponentType.TextBox,
        formControlName: "OutlineFormFieldHINT"
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
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.FormFieldHint_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.FormFieldHint_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

}
