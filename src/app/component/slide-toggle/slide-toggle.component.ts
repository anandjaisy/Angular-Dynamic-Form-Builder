import { Component, OnInit, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, ComponentPosition, AlignmentLayoutDirection, Floatinglabel } from 'projects/falcon-core/src/lib/view-models/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent extends BaseFormComponent<any> implements OnInit {
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();
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
          label: "Slide me! BEFORE text color=accent",
          appearance : Appearance.Before,
          color : "accent"
        },
        componentType: ComponentType.SlideToggle,
        formControlName: "slideMeBEFORE"
      },
      {
        componentProperty: {
          label: "Slide me! AFTER text color=primary",
          appearance : Appearance.After,
          color : "primary"
        },
        componentType: ComponentType.SlideToggle,
        formControlName: "slideMeAFTERText"
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
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.SlideToggle_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.SlideToggle_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
