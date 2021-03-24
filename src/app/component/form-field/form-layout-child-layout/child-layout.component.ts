import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { FormBuilder, Validators } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, FxLayout, AlignmentLayoutDirection, Floatinglabel } from 'projects/falcon-core/src/lib/model/component-type.enum';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';


@Component({
  selector: 'app-child-layout',
  templateUrl: './child-layout.component.html',
  styleUrls: ['./child-layout.component.scss']
})
export class ChildLayoutComponent extends BaseFormComponent<any> implements OnInit {
  codeGeneratorEnable: boolean = false;
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
        fxLayoutAlignHorizontal: AlignmentLayoutDirection.Center,
        fxLayoutAlignVertical: AlignmentLayoutDirection.Center,
        componentConfig: [{
          componentProperty: {
            label: "Max Price",
            appearance: Appearance.Outline,
            placeHolder: "Max Price",
            attrType: InputTypes.Text,
            options: [{ value: 'Extra-cheese', viewValue: 'Extra cheese' },
            { value: 'Bellsprout', viewValue: 'Bellsprout' },
            { value: 'Mushroom', viewValue: 'Mushroom' },
            { value: 'Onion', viewValue: 'Onion' },
            { value: 'Pepperoni', viewValue: 'Pepperoni' },
            { value: 'Sausage', viewValue: 'Sausage' },
            { value: 'Tomato', viewValue: 'Tomato' }]
          },
          componentType: ComponentType.Select,
          formControlName: "MaxPrice"
        },
        {
          componentProperty: {
            label: "Body Type",
            appearance: Appearance.Outline,
            placeHolder: "Body Type",
            attrType: InputTypes.Text,
            options: [{ value: 'Extra-cheese', viewValue: 'Extra cheese' },
            { value: 'Bellsprout', viewValue: 'Bellsprout' },
            { value: 'Mushroom', viewValue: 'Mushroom' },
            { value: 'Onion', viewValue: 'Onion' },
            { value: 'Pepperoni', viewValue: 'Pepperoni' },
            { value: 'Sausage', viewValue: 'Sausage' },
            { value: 'Tomato', viewValue: 'Tomato' }]
          },
          componentType: ComponentType.Select,
          formControlName: "BodyType"
        },
        {
          componentProperty: {
            label: "Max Price 2",
            appearance: Appearance.Outline,
            placeHolder: "Max Price",
            attrType: InputTypes.Text,
            options: [{ value: 'Extra-cheese', viewValue: 'Extra cheese' },
            { value: 'Bellsprout', viewValue: 'Bellsprout' },
            { value: 'Mushroom', viewValue: 'Mushroom' },
            { value: 'Onion', viewValue: 'Onion' },
            { value: 'Pepperoni', viewValue: 'Pepperoni' },
            { value: 'Sausage', viewValue: 'Sausage' },
            { value: 'Tomato', viewValue: 'Tomato' }]
          },
          componentType: ComponentType.Select,
          formControlName: "MaxPrice2"
        }]
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
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.Form_Field_Example_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.Form_Field__Example_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

}
