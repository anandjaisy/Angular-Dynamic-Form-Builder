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
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
})
export class ButtonToggleComponent
  extends BaseFormComponent<any>
  implements OnInit
{
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();
  constructor(fb: UntypedFormBuilder) {
    super(fb);
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
            fxLayout: FxLayout.Column,
            fxLayoutGap: '10px',
            fxLayoutAlignHorizontal:
              AlignmentLayoutDirection.SpaceAround,
            fxLayoutAlignVertical:
              AlignmentLayoutDirection.SpaceAround,
            componentConfig: [
              {
                componentProperty: {
                  options: [
                    { value: 'Bold', viewValue: 'Bold' },
                    { value: 'Italic', viewValue: 'Italic' },
                    { value: 'Underline', viewValue: 'Underline' },
                  ],
                  appearance: Appearance.Standard,
                },
                componentType: ComponentType.ButtonToggle,
                formControlName: 'basicButtonToggle',
              },
              {
                componentProperty: {
                  label: 'Multiple selection',
                  options: [
                    {
                      value: 'Extra-cheese',
                      viewValue: 'Extra cheese',
                    },
                    { value: 'Bellsprout', viewValue: 'Bellsprout' },
                    { value: 'Mushroom', viewValue: 'Mushroom' },
                    { value: 'Onion', viewValue: 'Onion' },
                    { value: 'Pepperoni', viewValue: 'Pepperoni' },
                    { value: 'Sausage', viewValue: 'Sausage' },
                    { value: 'Tomato', viewValue: 'Tomato' },
                  ],
                  appearance: Appearance.Legacy,
                  groupStyle: { 'margin-top': '20px' },
                },
                componentType: ComponentType.ButtonToggle,
                formControlName: 'legecyButtonToggle',
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
      AngularCodeTemplate.Button_Toggle_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Button_Toggle_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
