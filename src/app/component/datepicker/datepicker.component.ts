import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, FxLayout, AlignmentLayoutDirection, Floatinglabel } from 'projects/falcon-core/src/lib/model/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent extends BaseFormComponent<any> implements OnInit {
  codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel : AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();
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
        fxLayoutAlignHorizontal: AlignmentLayoutDirection.SpaceAround,
        fxLayoutAlignVertical: AlignmentLayoutDirection.SpaceAround
      },
      componentConfig: [{
        componentProperty: {
          label: "Legacy custom icon datepicker",
          appearance: Appearance.Legacy,
          placeHolder: "Legacy Basic datepicker",
          attrType: InputTypes.Text,
          groupStyle : {'width': '125%'},
          suffix : {
            isIcon : true,
            text : "keyboard_arrow_down"
          }
        },
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Required Field"
          }],
        componentType: ComponentType.DatePicker,
        formControlName: "legacyBasicDatePicker"
      },
      {
        componentProperty: {
          label: "Outline Basic datepicker",
          appearance: Appearance.Outline,
          placeHolder: "Outline Basic datepicker",
          attrType: InputTypes.Text
        },
        componentType: ComponentType.DatePicker,
        formControlName: "outlineDatepicker"
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
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.Date_picker_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.Date_picker_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

}
