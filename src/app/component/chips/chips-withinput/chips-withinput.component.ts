import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';
import {
  BaseFormComponent,
  AlignmentLayoutDirection,
  FxLayout,
  Appearance,
  ComponentType,
  InputTypes,
} from 'projects/falcon-core/src/public-api';

@Component({
  selector: 'app-chips-withinput',
  templateUrl: './chips-withinput.component.html',
  styleUrls: ['./chips-withinput.component.scss'],
})
export class ChipsWithinputComponent
  extends BaseFormComponent<any>
  implements OnInit
{
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();
  public codeGeneratorEnable: boolean = false;
  items: FormArray;

  constructor(fb: FormBuilder) {
    super(fb);
    this.defineForm();
  }

  ngOnInit(): void {
    this.form = this.createControls();
    //this.addItem();
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
                  options: [],
                  chipSelectedOptions: [],
                  attrType: InputTypes.Text,
                  appearance: Appearance.Outline,
                },
                formArray: [],
                componentType: ComponentType.Chip,
                formControlName: 'chipsWithInput',
              },
            ],
          },
        ],
      },
    };
  }

  // addItem(): void {
  //   this.items = this.form.controls['chipsWithInput'] as FormArray;
  //   this.items.push(this.createItem());
  // }

  // createItem(): FormGroup {
  //   return this.fb.group({
  //     viewValue: 'asdasdsa',
  //     value: ''
  //   });
  // }

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
