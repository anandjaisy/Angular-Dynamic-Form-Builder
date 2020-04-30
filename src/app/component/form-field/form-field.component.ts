import { Component, OnInit, } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, ComponentPosition, AlignmentLayoutDirection } from 'projects/falcon-core/src/lib/view-models/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent extends BaseFormComponent<any> implements OnInit {
  counter: number = 0;
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();
  AddButtonConfig = { componentProperty: { 
    label: "Add", appearance: Appearance.Raised, color: "primary", componentStyle: { 'float': 'right'} }, 
    componentType: ComponentType.Button, formControlName: "add" 
  };
  DeleteButtonConfig = { componentProperty: { label: "Delete", appearance: Appearance.Raised, color: "warn", componentStyle: { 'float': 'right','margin-left':'3px' } , attrType : InputTypes.Button}, componentType: ComponentType.Button, formControlName: "remove" };
  constructor(fb: FormBuilder) {
    super(fb);
    this.defineForm();
  }

  protected defineForm(): void {
    this.controlsConfig =
    {
      layoutConfig: {
        layoutDirection: ComponentPosition.Row,
        fxLayoutGap: "10px",
        fxFlex: "50",
        alignmentLayoutDirectionHorizontal: AlignmentLayoutDirection.Center,
        alignmentLayoutDirectionVertical: AlignmentLayoutDirection.Center
      },
      componentConfig: [
      {
        componentProperty: {
          label: "Select Component",
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
        componentType: ComponentType.Select,
        formControlName: `selectComponent${this.counter}`
      }      ]
    }
  }

  ngOnInit(): void {
    this.form = this.createControls();
  }

  protected getDatasource(): Observable<any> {
    return of();
  }
  protected submitDatasource(model: any): Observable<any> {
    ++this.counter;
    var configToadd = [{
      componentProperty: {
        label: "Select Component",
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
      componentType: ComponentType.Select,
      formControlName: `selectComponent${this.counter}`,
      validations: []
    }];
    this.addControl(configToadd);
    return of(model);
  }
  RemoveComponentclick($event){
    this.removeControl(this.counter);
    this.counter = this.counter-1;
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.Form_Field_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.Form_Field_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
