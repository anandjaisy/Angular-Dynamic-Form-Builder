import { Component, EventEmitter, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import {
  ComponentType,
  InputTypes,
  Appearance,
  FxLayout,
  AlignmentLayoutDirection,
  Floatinglabel,
} from 'projects/falcon-core/src/lib/model/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent
  extends BaseFormComponent<any>
  implements OnInit
{
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();
  private changeEvent: EventEmitter<MatCheckboxChange> =
    new EventEmitter<MatCheckboxChange>();
  constructor(fb: UntypedFormBuilder) {
    super(fb);
    this.defineForm();
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
                  label: 'Basic checkboxes BEFORE (with checked)',
                  appearance: Appearance.Before,
                  value: true,
                },
                componentType: ComponentType.Checkbox,
                formControlName: 'basicCheckboxesBEFORE',
              },
              {
                componentProperty: {
                  label: 'Basic checkboxes AFTER',
                  appearance: Appearance.After,
                  value: false,
                  event: { change: this.changeEvent },
                },
                componentType: ComponentType.Checkbox,
                formControlName: 'basicCheckboxesAFTER',
              },
            ],
          },
        ],
      },
    };
  }

  ngOnInit(): void {
    this.form = this.createControls();
    this.changeEvent.subscribe(($event) => {
      console.log('From component' + $event.checked);
    });
  }

  protected getDatasource(): Observable<any> {
    return of();
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
