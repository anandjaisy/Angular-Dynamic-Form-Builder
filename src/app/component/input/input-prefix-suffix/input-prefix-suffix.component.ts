import { Component, OnInit, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, ComponentPosition, AlignmentLayoutDirection, Floatinglabel } from 'projects/falcon-core/src/lib/view-models/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';
import { CustomValidator } from 'src/app/common/validations';

@Component({
  selector: 'app-input-prefix-suffix',
  templateUrl: './input-prefix-suffix.component.html',
  styleUrls: ['./input-prefix-suffix.component.scss']
})
export class InputPrefixSuffixComponent extends BaseFormComponent<any> implements OnInit {
  codeGeneratorEnable: boolean = false;
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
          name: "Prefix Icon",
          appearance: Appearance.Legacy,
          placeHolder: "Required Validation *",
          attrType: InputTypes.Text,
          prefix : {
            isIcon: true,
            text: "sentiment_satisfied_alt"
          }
        },
        componentType: ComponentType.TextBox,
        formControlName: "prefixIcon"
      },
      {
        componentProperty: {
          name: "Suffix Number",
          appearance: Appearance.Standard,
          placeHolder: "Suffix Icon",
          attrType: InputTypes.Text,
          suffix: {
            isIcon : false,
            text : ".00"
          }
        },
        componentType: ComponentType.TextBox,
        formControlName: "suffixIcon"
      },
      {
        componentProperty: {
          name: "Prefix & Suffix icon",
          appearance: Appearance.Outline,
          placeHolder: "Prefix & Suffix icon",
          attrType: InputTypes.Text,
          prefix : {
            isIcon : true,
            text : "euro"
          },
          suffix : {
            isIcon: true,
            text : "done"
          }
        },
        componentType: ComponentType.TextBox,
        formControlName: "prefixandSuffixIcon"
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
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.FormFieldPrefixSuffix_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.FormFieldPrefixSuffix_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

}
