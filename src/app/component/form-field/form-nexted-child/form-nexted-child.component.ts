import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';
import {
  AlignmentLayoutDirection,
  Appearance,
  ComponentType,
  FxLayout,
  InputTypes,
} from 'projects/falcon-core/src/public-api';

@Component({
  selector: 'app-form-nexted-child',
  templateUrl: './form-nexted-child.component.html',
  styleUrls: ['./form-nexted-child.component.scss'],
})
export class FormNextedChildComponent
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

  ngOnInit(): void {
    this.form = this.createControls();
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
            fxLayoutAlignHorizontal: AlignmentLayoutDirection.Center,
            fxLayoutAlignVertical: AlignmentLayoutDirection.Center,
            componentConfig: [
              {
                componentProperty: {
                  label: 'Body Type',
                  appearance: Appearance.Outline,
                  placeHolder: 'Body Type',
                  attrType: InputTypes.Text,
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
                },
                componentType: ComponentType.Select,
                formControlName: 'BodyType',
              },
              {
                componentProperty: {
                  label: 'Body Type',
                  appearance: Appearance.Outline,
                  placeHolder: 'Body Type',
                  attrType: InputTypes.Text,
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
                },
                componentType: ComponentType.Select,
                formControlName: 'BodyType',
              },
            ],
          },
          {
            fxLayout: FxLayout.Column,
            fxLayoutGap: '10px',
            fxLayoutAlignHorizontal: AlignmentLayoutDirection.Center,
            fxLayoutAlignVertical: AlignmentLayoutDirection.Center,
            componentConfig: [
              {
                componentProperty: {
                  label: 'Body Type',
                  appearance: Appearance.Outline,
                  placeHolder: 'Body Type',
                  attrType: InputTypes.Text,
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
                },
                componentType: ComponentType.Select,
                formControlName: 'BodyType',
              },
              {
                componentProperty: {
                  label: 'Body Type',
                  appearance: Appearance.Outline,
                  placeHolder: 'Body Type',
                  attrType: InputTypes.Text,
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
                },
                componentType: ComponentType.Select,
                formControlName: 'BodyType',
              },
            ],
          },
          {
            fxLayout: FxLayout.Row,
            fxLayoutGap: '10px',
            fxLayoutAlignHorizontal: AlignmentLayoutDirection.Center,
            fxLayoutAlignVertical: AlignmentLayoutDirection.Center,
            componentConfig: [
              {
                componentProperty: {
                  label: 'Body Type',
                  appearance: Appearance.Outline,
                  placeHolder: 'Body Type',
                  attrType: InputTypes.Text,
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
                },
                componentType: ComponentType.Select,
                formControlName: 'BodyType',
              },
              {
                componentProperty: {
                  label: 'Body Type',
                  appearance: Appearance.Outline,
                  placeHolder: 'Body Type',
                  attrType: InputTypes.Text,
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
                },
                componentType: ComponentType.Select,
                formControlName: 'BodyType',
              },
            ],
          },
          {
            fxLayout: FxLayout.Row,
            fxLayoutGap: '10px',
            fxLayoutAlignHorizontal: AlignmentLayoutDirection.Center,
            fxLayoutAlignVertical: AlignmentLayoutDirection.Center,
            componentConfig: [
              {
                componentProperty: {
                  label: 'Body Type',
                  appearance: Appearance.Outline,
                  placeHolder: 'Body Type',
                  attrType: InputTypes.Text,
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
                },
                componentType: ComponentType.Select,
                formControlName: 'BodyType',
              },
              {
                componentProperty: {
                  label: 'Body Type',
                  appearance: Appearance.Outline,
                  placeHolder: 'Body Type',
                  attrType: InputTypes.Text,
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
                },
                componentType: ComponentType.Select,
                formControlName: 'BodyType',
              },
            ],
          },
          {
            fxLayout: FxLayout.Column,
            fxLayoutGap: '10px',
            fxLayoutAlignHorizontal: AlignmentLayoutDirection.End,
            fxLayoutAlignVertical: AlignmentLayoutDirection.End,
            componentConfig: [
              {
                componentProperty: {
                  label: 'Check',
                  appearance: Appearance.Before,
                  color: 'accent',
                },
                componentType: ComponentType.SlideToggle,
                formControlName: 'slideMeBEFORE',
              },
            ],
          },
        ],
      },
    };
  }

  protected submitDatasource(model: any): Observable<any> {
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Form_Field_Example_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Form_Field__Example_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}

//TODO Array of Layout and inside property - will change entire flow of current application
