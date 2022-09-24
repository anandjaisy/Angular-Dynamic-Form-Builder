import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import {
  ComponentType,
  InputTypes,
  Appearance,
  FxLayout,
  AlignmentLayoutDirection,
  Floatinglabel,
} from 'projects/falcon-core/src/lib/model/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-input-floating-label',
  templateUrl: './input-floating-label.component.html',
  styleUrls: ['./input-floating-label.component.scss'],
})
export class InputFloatingLabelComponent
  extends BaseFormComponent<any>
  implements OnInit
{
  codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();
  constructor() {
    super();
    this.defineForm();
  }

  protected defineForm(): void {
    this.controlsConfig = {
      container: {
        fxLayout: FxLayout.Column,
        fxLayoutAlignHorizontal:
          AlignmentLayoutDirection.SpaceBetween,
        fxLayoutAlignVertical: AlignmentLayoutDirection.None,
        layoutConfig: [
          {
            fxLayout: FxLayout.Row,
            fxLayoutGap: '10px',
            fxLayoutAlignHorizontal:
              AlignmentLayoutDirection.SpaceAround,
            fxLayoutAlignVertical:
              AlignmentLayoutDirection.SpaceAround,
            componentConfig: [
              {
                componentProperty: {
                  label: 'Floating label ALWAYS',
                  appearance: Appearance.Legacy,
                  placeHolder: 'Floating label ALWAYS',
                  attrType: InputTypes.Text,
                  floatLabel: Floatinglabel.Always,
                },
                componentType: ComponentType.TextBox,
                formControlName: 'floatingLabelAlways',
              },
              {
                componentProperty: {
                  label: 'Floating label AUTO',
                  appearance: Appearance.Outline,
                  placeHolder: 'Floating label AUTO',
                  attrType: InputTypes.Text,
                  floatLabel: Floatinglabel.Auto,
                },
                componentType: ComponentType.TextBox,
                formControlName: 'floatingLabelAuto',
              },
            ],
          },
        ],
      },
    };
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
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.FormFieldFloatingLabel_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.FormFieldFloatingLabel_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
