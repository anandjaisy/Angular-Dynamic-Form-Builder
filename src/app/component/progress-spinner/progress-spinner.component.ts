import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, ComponentPosition, AlignmentLayoutDirection, Floatinglabel } from 'projects/falcon-core/src/lib/view-models/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent extends BaseFormComponent<any> implements OnInit {
  progressSpinnerValue : number = 10;
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel : AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();
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
        alignmentLayoutDirectionHorizontal: AlignmentLayoutDirection.SpaceAround,
        alignmentLayoutDirectionVertical: AlignmentLayoutDirection.SpaceAround
      },
      componentConfig: [{
        componentProperty: {
          label: "Progress :   ",
          color : "primary",
          sliderProperty: {
            invert : false,
            thumbLabel : false,
            vertical : false,
            min : 0,
            max : 100,
            step : 1,
            tickInterval : 4
          }
        },
        componentType: ComponentType.Slider,
        formControlName: "slider"
      }]
    }
  }

  ngOnInit(): void {
    this.form = this.createControls();
    this.onChanges();
  }

  onChanges(): void {
    this.form.get('slider').valueChanges.subscribe(val => {
      this.progressSpinnerValue = val;
    });
  }

  protected getDatasource(): Observable<any> {
    return of();
  }
  protected submitDatasource(model: any): Observable<any> {
    return of(model);
  }
  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.ProgressSpinner_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.ProgressSpinner_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

}