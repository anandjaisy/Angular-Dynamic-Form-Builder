import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { AlignmentLayoutDirection, Appearance, BaseFormComponent, ComponentType, FxLayout } from 'projects/falcon-core/src/public-api';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent extends BaseFormComponent<any> implements OnInit {
  private productOptionEventEmitter: EventEmitter<MatCheckboxChange> = new EventEmitter<MatCheckboxChange>();
  constructor(fb: FormBuilder) {
    super(fb);
    this.defineForm();
  }
  ngOnInit(): void {
    this.form = this.createControls();
    this.productOptionEventEmitter.subscribe(item => {
      if (item.checked)
        this.addControls();
      else
        this.removeControls();
    });
  }

  protected defineForm(): void {
    this.controlsConfig =
    {
      container: {
        fxLayout: FxLayout.Column,
        fxLayoutAlignHorizontal: AlignmentLayoutDirection.SpaceBetween,
        fxLayoutAlignVertical: AlignmentLayoutDirection.None,
        fxLayoutGap: '20px',
        layoutConfig: [{
          fxLayout: FxLayout.Row,
          fxLayoutAlignHorizontal: AlignmentLayoutDirection.SpaceBetween,
          fxLayoutAlignVertical: AlignmentLayoutDirection.SpaceBetween,
          componentConfig: [{
            componentProperty: {
              label: 'This product has multiple options, like different sizes or colors',
              event: { change: this.productOptionEventEmitter }
            },
            componentType: ComponentType.Checkbox,
            formControlName: 'checkboxOption'
          },
          {
            componentProperty: {
              label: 'Add option',
              appearance: Appearance.Raised,
            },
            componentType: ComponentType.Button,
            formControlName: 'Raised'
          }]
        },
        {
          fxLayout: FxLayout.Row,
          fxLayoutAlignHorizontal: AlignmentLayoutDirection.SpaceBetween,
          fxLayoutAlignVertical: AlignmentLayoutDirection.SpaceBetween,
          componentConfig: [{
            formControlName: 'productOption',
            formArray: []
          }]
        }
      ]
      }
    };
  }

  protected submitDatasource(model: any): Observable<any> {
    console.log(model);
    return of(model);
  }


  private addControls(): void {
    const configToadd = [{
      componentConfig: [{
        formArray: [{
          componentConfig: [{
            componentProperty: {
              label: 'Option',
              options: [{ value: 'size', viewValue: 'Size' },
              { value: 'material', viewValue: 'Material' },
              { value: 'color', viewValue: 'Color' }
              ],
              appearance: Appearance.Outline
            },
            componentType: ComponentType.Select,
            formControlName: 'Option'
          },
          {
            componentProperty: {
              label: 'Separate options with a comma',
              appearance: Appearance.Outline,
              color: 'accent',
              placeHolder: 'Eg color - XS,SM,M,L,XL',
              fxFlexLayout: { fxFlex: 'auto', fxFlex_gt_xs: '100%', fxFlex_gt_sm: '69%' }
            },
            componentType: ComponentType.TextBox,
            formControlName: 'optionValues'
          },
          {
            componentProperty: {
              label: 'delete',
              appearance: Appearance.MiniFAB,
              color: 'warn',
              componentStyle: { 'margin-top': '9px' }
            },
            componentType: ComponentType.Button
          }]
        }]
      }]
    }];
    this.addControl(configToadd, 1);
  }

  private removeControls(): void {

  }
}
