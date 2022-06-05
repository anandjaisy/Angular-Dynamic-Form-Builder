import { Component, OnInit, Input } from '@angular/core';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  IMeta,
  Appearance,
  BaseFormComponent,
  ComponentType,
  FxLayout,
  IComponentConfig,
  InputTypes,
  AlignmentLayoutDirection,
  ILayoutConfig,
} from 'projects/falcon-core/src/public-api';

@Component({
  selector: 'app-form-child',
  templateUrl: './form-child.component.html',
  styleUrls: ['./form-child.component.scss'],
})
export class FormChildComponent
  extends BaseFormComponent<any>
  implements OnInit
{
  @Input() form: UntypedFormGroup;
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();
  private controls: ILayoutConfig[] = [];

  constructor(fb: UntypedFormBuilder) {
    super(fb);
    this.defineForm();
  }

  ngOnInit(): void {
    this.controlsConfig = {
      container: {
        layoutConfig: [
          {
            fxLayout: FxLayout.Row,
            fxLayoutGap: '10px',
            fxLayoutAlignHorizontal:
              AlignmentLayoutDirection.SpaceAround,
            fxLayoutAlignVertical:
              AlignmentLayoutDirection.SpaceAround,
            componentConfig: [],
          },
        ],
      },
    } as IMeta;
    this.addControl(this.controls);
  }

  protected defineForm(): void {
    this.controls = [
      {
        fxLayout: FxLayout.Row,
        fxLayoutGap: '10px',
        fxLayoutAlignHorizontal: AlignmentLayoutDirection.SpaceAround,
        fxLayoutAlignVertical: AlignmentLayoutDirection.SpaceAround,
        componentConfig: [
          {
            componentProperty: {
              label: 'Select Component',
              options: [
                { value: 'Extra-cheese', viewValue: 'Extra cheese' },
                { value: 'Bellsprout', viewValue: 'Bellsprout' },
                { value: 'Mushroom', viewValue: 'Mushroom' },
                { value: 'Onion', viewValue: 'Onion' },
                { value: 'Pepperoni', viewValue: 'Pepperoni' },
                { value: 'Sausage', viewValue: 'Sausage' },
                { value: 'Tomato', viewValue: 'Tomato' },
              ],
              appearance: Appearance.Outline,
              color: 'accent',
            },
            componentType: ComponentType.Select,
            formControlName: 'ChildLegacyFormField',
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'Required Field',
              },
            ],
          },
        ],
      },
    ];
  }

  protected submitDatasource(model: any): Observable<any> {
    console.log(model);
    return of(model);
  }
}
