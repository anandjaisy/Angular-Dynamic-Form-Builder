import { Component, OnInit, } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, FxLayout, AlignmentLayoutDirection, Floatinglabel } from 'projects/falcon-core/src/lib/model/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent extends BaseFormComponent<any> implements OnInit {
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();
  constructor(fb: FormBuilder) {
    super(fb);
    this.defineForm();
  }

  protected defineForm(): void {
    this.controlsConfig =
    {
      layoutConfig: [{
        fxLayout: FxLayout.Row,
        fxLayoutGap: "10px",
        fxLayoutAlignHorizontal: AlignmentLayoutDirection.SpaceAround,
        fxLayoutAlignVertical: AlignmentLayoutDirection.SpaceAround,
        componentConfig: [{
          componentProperty: {
            label: "Basic Auto complete",
            options: [{ value: 'Sydney', viewValue: 'Sydney' },
            { value: 'Melbourne', viewValue: 'Melbourne' },
            { value: 'Brisbane', viewValue: 'Brisbane' },
            { value: 'NewYork', viewValue: 'New York' },
            { value: 'Kathmandu', viewValue: 'Kathmandu' }],
            appearance: Appearance.Standard
          },
          componentType: ComponentType.AutoComplete,
          formControlName: "basicAutoComplete",
        },
        {
          componentProperty: {
            label: "Outline Auto complete",
            options: [{ value: 'Extra-cheese', viewValue: 'Extra cheese' },
            { value: 'Bellsprout', viewValue: 'Bellsprout' },
            { value: 'Mushroom', viewValue: 'Mushroom' },
            { value: 'Onion', viewValue: 'Onion' },
            { value: 'Pepperoni', viewValue: 'Pepperoni' },
            { value: 'Sausage', viewValue: 'Sausage' },
            { value: 'Tomato', viewValue: 'Tomato' }],
            appearance: Appearance.Outline,
            color: 'accent'
          },
          componentType: ComponentType.AutoComplete,
          formControlName: "OutlineAutoComplete"
        },
        {
          componentProperty: {
            label: "Plain input autocomplete",
            options: [{ value: 'Extra-cheese', viewValue: 'Extra cheese' },
            { value: 'Bellsprout', viewValue: 'Bellsprout' },
            { value: 'Mushroom', viewValue: 'Mushroom' },
            { value: 'Onion', viewValue: 'Onion' },
            { value: 'Pepperoni', viewValue: 'Pepperoni' },
            { value: 'Sausage', viewValue: 'Sausage' },
            { value: 'Tomato', viewValue: 'Tomato' }],
            appearance: Appearance.Plain,
            color: 'accent',
            placeHolder: "Plan text"
          },
          componentType: ComponentType.AutoComplete,
          formControlName: "plaininputautocomplete"
        }
        ]
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
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.Auto_Complete_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.Auto_Complete_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
