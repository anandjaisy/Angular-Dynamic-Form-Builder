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
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent
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
            fxLayout: FxLayout.Row,
            fxLayoutGap: '10px',
            fxLayoutAlignHorizontal:
              AlignmentLayoutDirection.SpaceAround,
            fxLayoutAlignVertical:
              AlignmentLayoutDirection.SpaceAround,
            componentConfig: [
              {
                componentProperty: {
                  label: 'Value',
                  appearance: Appearance.Standard,
                  attrType: InputTypes.Number,
                  value: 0,
                },
                componentType: ComponentType.TextBox,
                formControlName: 'value',
              },
              {
                componentProperty: {
                  label: 'Min Value',
                  appearance: Appearance.Standard,
                  attrType: InputTypes.Number,
                  value: 0,
                },
                componentType: ComponentType.TextBox,
                formControlName: 'minValue',
              },
              {
                componentProperty: {
                  label: 'Max value',
                  appearance: Appearance.Standard,
                  attrType: InputTypes.Number,
                  value: 100,
                },
                componentType: ComponentType.TextBox,
                formControlName: 'maxvalue',
              },
              {
                componentProperty: {
                  label: 'Step size',
                  appearance: Appearance.Standard,
                  attrType: InputTypes.Number,
                  value: 1,
                },
                componentType: ComponentType.TextBox,
                formControlName: 'stepSize',
              },
              {
                componentProperty: {
                  label: 'Show ticks',
                  groupStyle: { 'margin-top': '40px' },
                },
                componentType: ComponentType.Checkbox,
                formControlName: 'showTicks',
              },
              {
                componentProperty: {
                  label: 'Show thumb label',
                  groupStyle: { 'margin-top': '40px' },
                },
                componentType: ComponentType.Checkbox,
                formControlName: 'showThumbLabel',
              },
              {
                componentProperty: {
                  label: 'Vertical',
                  groupStyle: { 'margin-top': '40px' },
                },
                componentType: ComponentType.Checkbox,
                formControlName: 'vertical',
              },
              {
                componentProperty: {
                  label: 'Inverted',
                  groupStyle: { 'margin-top': '40px' },
                },
                componentType: ComponentType.Checkbox,
                formControlName: 'inverted',
              },
              {
                componentProperty: {
                  label: 'Disabled',
                  groupStyle: { 'margin-top': '40px' },
                },
                componentType: ComponentType.Checkbox,
                formControlName: 'disabled',
              },
              {
                componentProperty: {
                  color: 'primary',
                  groupStyle: { 'margin-top': '40px', width: '30em' },
                  componentStyle: { width: '100%' },
                  sliderProperty: {
                    invert: false,
                    thumbLabel: false,
                    vertical: false,
                    min: 0,
                    max: 100,
                    step: 1,
                    tickInterval: 4,
                  },
                },
                componentType: ComponentType.Slider,
                formControlName: 'slider',
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
      AngularCodeTemplate.Slider_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Slider_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
