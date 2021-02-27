import { Component, OnInit, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, FxLayout, AlignmentLayoutDirection, Floatinglabel } from 'projects/falcon-core/src/lib/view-models/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends BaseFormComponent<any> implements OnInit {
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
          label: "Basic mat-select",
          options: [{ value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
          { value: 'oddish-1', viewValue: 'Oddish' },
          { value: 'bellsprout-2', viewValue: 'Bellsprout' }],
          appearance: Appearance.Standard
        },
        componentType: ComponentType.Select,
        formControlName: "basicMatSelect",
      },
      {
        componentProperty: {
          label: "Multiple selection",
          options: [{ value: 'Extra-cheese', viewValue: 'Extra cheese' },
          { value: 'Bellsprout', viewValue: 'Bellsprout' },
          { value: 'Mushroom', viewValue: 'Mushroom' },
          { value: 'Onion', viewValue: 'Onion', disabled: true },
          { value: 'Pepperoni', viewValue: 'Pepperoni' },
          { value: 'Sausage', viewValue: 'Sausage' },
          { value: 'Tomato', viewValue: 'Tomato', disabled: false }],
          appearance: Appearance.Outline,
          selectProperty: { multiple: true },
          color: 'accent'
        },
        componentType: ComponentType.Select,
        formControlName: "multipleMatSelect"
      },
      {
        componentProperty: {
          label: "Disable select component",
          options: [{ value: 'Extra-cheese', viewValue: 'Extra cheese' },
          { value: 'Bellsprout', viewValue: 'Bellsprout' },
          { value: 'Mushroom', viewValue: 'Mushroom' },
          { value: 'Onion', viewValue: 'Onion', disabled: true },
          { value: 'Pepperoni', viewValue: 'Pepperoni' },
          { value: 'Sausage', viewValue: 'Sausage' },
          { value: 'Tomato', viewValue: 'Tomato', disabled: false }],
          appearance: Appearance.Outline,
          color: 'accent'
        },
        componentType: ComponentType.Select,
        formControlName: "disableMatSelect"
      },
      {
        componentProperty: {
          label: "Default value in component",
          options: [{ value: 'Extra-cheese', viewValue: 'Extra cheese' },
          { value: 'Bellsprout', viewValue: 'Bellsprout' },
          { value: 'Mushroom', viewValue: 'Mushroom' },
          { value: 'Onion', viewValue: 'Onion', disabled: true },
          { value: 'pepperoni', viewValue: 'Pepperoni' },
          { value: 'Sausage', viewValue: 'Sausage' },
          { value: 'Tomato', viewValue: 'Tomato', disabled: false }],
          appearance: Appearance.Outline,
          color: 'accent'
        },
        componentType: ComponentType.Select,
        formControlName: "defaultValueMatSelect"
      }
      ]
    }
  }

  ngOnInit(): void {
    this.form = this.createControls();
    setTimeout(() => {
      this.patchValue(
        {
          multipleMatSelect: [this.controlsConfig.componentConfig[1].componentProperty.options[6].disabled = true],
          disableMatSelect: this.controlsConfig.componentConfig[2].componentProperty.disabled = true,
          defaultValueMatSelect: this.controlsConfig.componentConfig[3].componentProperty.value = 'pepperoni'
        }
      )
      console.log('Compile successfully');
    }, 10000)
  }

  protected getDatasource(): Observable<any> {
    return of();
  }
  protected submitDatasource(model: any): Observable<any> {
    console.log(model);
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.Select_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.Select_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
