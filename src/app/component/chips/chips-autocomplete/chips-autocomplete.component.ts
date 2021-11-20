import { Component, OnInit } from '@angular/core';
import {
  BaseFormComponent,
  AlignmentLayoutDirection,
  FxLayout,
  Appearance,
  ComponentType,
  InputTypes,
} from 'projects/falcon-core/src/public-api';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-chips-autocomplete',
  templateUrl: './chips-autocomplete.component.html',
  styleUrls: ['./chips-autocomplete.component.scss'],
})
export class ChipsAutocompleteComponent
  extends BaseFormComponent<any>
  implements OnInit
{
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();
  public codeGeneratorEnable: boolean = false;

  constructor(protected fb: FormBuilder) {
    super(fb);
    this.defineForm();
  }

  ngOnInit(): void {
    this.form = this.createControls();
    this.controlsConfig.container.layoutConfig[0].componentConfig[0].componentProperty.chipSelectedOptions =
      [{ value: 'Kathmandu', viewValue: 'Kathmandu' }];
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
                  label: 'Basic Auto complete',
                  options: [
                    { value: 'Sydney', viewValue: 'Sydney' },
                    { value: 'Melbourne', viewValue: 'Melbourne' },
                    { value: 'Brisbane', viewValue: 'Brisbane' },
                    { value: 'NewYork', viewValue: 'New York' },
                    { value: 'Kathmandu', viewValue: 'Kathmandu' },
                  ],
                  attrType: InputTypes.Search,
                  appearance: Appearance.Outline,
                  chipSelectedOptions: [],
                },
                formArray: [],
                componentType: ComponentType.Chip,
                formControlName: 'chipsWithAutoComplete',
              },
            ],
          },
        ],
      },
    };
  }

  protected submitDatasource(model: any): Observable<any> {
    console.log(model);
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.CheckBox_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.CheckBox_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
