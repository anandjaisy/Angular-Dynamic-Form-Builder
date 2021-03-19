import { Component, OnInit, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, FxLayout, AlignmentLayoutDirection, Floatinglabel } from 'projects/falcon-core/src/lib/model/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent extends BaseFormComponent<any> implements OnInit {
  public codeGeneratorEnable: boolean = false;
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
          label: "Text Area with Auto Size Enable",
          appearance: Appearance.Outline,
          placeHolder: "Text Area with Auto Size Enable",
          textAreaProperty: {
            cdkTextareaAutosize: true,
            cdkAutosizeMinRows: 1,
            cdkAutosizeMaxRows: 5
          },
          suffix : {
            isIcon: true,
            text : "lock_open"
          }
        },
        componentType: ComponentType.TextArea,
        formControlName: "textAreaAutoSizeEnable"
      },
      {
        componentProperty: {
          label: "Text Area with static row and column",
          appearance: Appearance.Fill,
          placeHolder: "Text Area with static row and column",
          textAreaProperty: {
            rows: 10,
            cols: 40
          },
          suffix : {
            isIcon: true,
            text : "power_settings_new"
          }
        },
        componentType: ComponentType.TextArea,
        formControlName: "textAreaStaticRowColumn"
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
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.FormTextArea_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.FormTextArea_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
