import { Component, OnInit, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, FxLayout, AlignmentLayoutDirection, Floatinglabel } from 'projects/falcon-core/src/lib/view-models/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';
import { CustomValidator } from 'src/app/common/validations';

@Component({
  selector: 'app-form-field-example',
  templateUrl: './form-field-example.component.html',
  styleUrls: ['./form-field-example.component.scss']
})
export class FormFieldExampleComponent extends BaseFormComponent<any> implements OnInit {
  codeGeneratorEnable: boolean = false;
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
        fxLayoutAlignHorizontal: AlignmentLayoutDirection.Center,
        fxLayoutAlignVertical: AlignmentLayoutDirection.Center
      },
      componentConfig: [{
        componentProperty: {
          label: "Find your next car",
          options: [{ value: 'All', viewValue: 'All' },
          { value: 'New', viewValue: 'New' },
          { value: 'Old', viewValue: 'Old' }],
          value: "All",
          appearance: Appearance.Standard,
          fxFlexChildLayout: { fxFlex: "100" },
          labelStyle: { 'font-size': '24px' },
          groupStyle : {'text-align': 'center'}
        },
        componentType: ComponentType.ButtonToggle,
        formControlName: "findNextCar",
      },
      {
        componentProperty: {
          label: "Make",
          appearance: Appearance.Outline,
          placeHolder: "Make",
          attrType: InputTypes.Text,
          fxFlexChildLayout: { fxFlex: "24", fxFlex_xs: "100" },
          options: [{ value: 'Extra-cheese', viewValue: 'Extra cheese' },
          { value: 'Bellsprout', viewValue: 'Bellsprout' },
          { value: 'Mushroom', viewValue: 'Mushroom' },
          { value: 'Onion', viewValue: 'Onion' },
          { value: 'Pepperoni', viewValue: 'Pepperoni' },
          { value: 'Sausage', viewValue: 'Sausage' },
          { value: 'Tomato', viewValue: 'Tomato' }]
        },
        componentType: ComponentType.Select,
        formControlName: "Make"
      },
      {
        componentProperty: {
          label: "Model",
          appearance: Appearance.Outline,
          placeHolder: "Required & Pattern Validation *",
          attrType: InputTypes.Text,
          fxFlexChildLayout: { fxFlex: "24", fxFlex_xs: "100" },
          options: [{ value: 'Extra-cheese', viewValue: 'Extra cheese' },
          { value: 'Bellsprout', viewValue: 'Bellsprout' },
          { value: 'Mushroom', viewValue: 'Mushroom' },
          { value: 'Onion', viewValue: 'Onion' },
          { value: 'Pepperoni', viewValue: 'Pepperoni' },
          { value: 'Sausage', viewValue: 'Sausage' },
          { value: 'Tomato', viewValue: 'Tomato' }],
        },
        componentType: ComponentType.Select,
        formControlName: "Model"
      },
      {
        componentProperty: {
          label: "Location",
          appearance: Appearance.Outline,
          placeHolder: "Location",
          attrType: InputTypes.Text,
          fxFlexChildLayout: { fxFlex: "24", fxFlex_xs: "100" },
          options: [{ value: 'Extra-cheese', viewValue: 'Extra cheese' },
          { value: 'Bellsprout', viewValue: 'Bellsprout' },
          { value: 'Mushroom', viewValue: 'Mushroom' },
          { value: 'Onion', viewValue: 'Onion' },
          { value: 'Pepperoni', viewValue: 'Pepperoni' },
          { value: 'Sausage', viewValue: 'Sausage' },
          { value: 'Tomato', viewValue: 'Tomato' }]
        },
        componentType: ComponentType.Select,
        formControlName: "Location"
      },
      {
        componentProperty: {
          label: "Year",
          appearance: Appearance.Outline,
          placeHolder: "Year",
          attrType: InputTypes.Text,
          fxFlexChildLayout: { fxFlex: "24", fxFlex_xs: "100" },
          options: [{ value: 'Extra-cheese', viewValue: 'Extra cheese' },
          { value: 'Bellsprout', viewValue: 'Bellsprout' },
          { value: 'Mushroom', viewValue: 'Mushroom' },
          { value: 'Onion', viewValue: 'Onion' },
          { value: 'Pepperoni', viewValue: 'Pepperoni' },
          { value: 'Sausage', viewValue: 'Sausage' },
          { value: 'Tomato', viewValue: 'Tomato' }]
        },
        componentType: ComponentType.Select,
        formControlName: "Year"
      },
      {
        componentProperty: {
          label: "Min Price",
          appearance: Appearance.Outline,
          placeHolder: "Min Price",
          attrType: InputTypes.Text,
          fxFlexChildLayout: { fxFlex: "24", fxFlex_xs: "100" },
          options: [{ value: 'Extra-cheese', viewValue: 'Extra cheese' },
          { value: 'Bellsprout', viewValue: 'Bellsprout' },
          { value: 'Mushroom', viewValue: 'Mushroom' },
          { value: 'Onion', viewValue: 'Onion' },
          { value: 'Pepperoni', viewValue: 'Pepperoni' },
          { value: 'Sausage', viewValue: 'Sausage' },
          { value: 'Tomato', viewValue: 'Tomato' }]
        },
        componentType: ComponentType.Select,
        formControlName: "MinPrice"
      },
      {
        componentProperty: {
          label: "Max Price",
          appearance: Appearance.Outline,
          placeHolder: "Max Price",
          attrType: InputTypes.Text,
          fxFlexChildLayout: { fxFlex: "24", fxFlex_xs: "100" },
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
          fxFlexChildLayout: { fxFlex: "24", fxFlex_xs: "100" },
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
          label: "Keyword",
          appearance: Appearance.Outline,
          placeHolder: "Keyword",
          attrType: InputTypes.Text,
          fxFlexChildLayout: { fxFlex: "24", fxFlex_xs: "100" }
        },
        componentType: ComponentType.TextBox,
        formControlName: "Keyword"
      },
      {
        componentProperty: {
          label: "Show me 23455 cars",
          appearance: Appearance.Raised,
          color: 'primary',
          suffix : {isIcon: true, text: "navigate_next"}
        },
        componentType: ComponentType.Button,
        formControlName: "Raised"
      },]
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
