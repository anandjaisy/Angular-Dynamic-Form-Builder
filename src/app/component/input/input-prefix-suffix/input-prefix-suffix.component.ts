import { Component, OnInit, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, FxLayout, AlignmentLayoutDirection, Floatinglabel } from 'projects/falcon-core/src/lib/model/component-type.enum';
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
      container: {
        fxLayout: FxLayout.Column,
        fxLayoutAlignHorizontal: AlignmentLayoutDirection.SpaceBetween,
        fxLayoutAlignVertical: AlignmentLayoutDirection.None,
        layoutConfig: [{
          fxLayout: FxLayout.Row,
          fxLayoutGap: "10px",
          fxLayoutAlignHorizontal: AlignmentLayoutDirection.SpaceAround,
          fxLayoutAlignVertical: AlignmentLayoutDirection.SpaceAround,
          componentConfig: [{
            componentProperty: {
              label: "Prefix Icon",
              appearance: Appearance.Legacy,
              placeHolder: "Required Validation *",
              attrType: InputTypes.Text,
              prefix: {
                isIcon: true,
                text: "sentiment_satisfied_alt"
              }
            },
            componentType: ComponentType.TextBox,
            formControlName: "prefixIcon"
          },
          {
            componentProperty: {
              label: "Suffix Number",
              appearance: Appearance.Standard,
              placeHolder: "Suffix Icon",
              attrType: InputTypes.Text,
              suffix: {
                isIcon: false,
                text: ".00"
              }
            },
            componentType: ComponentType.TextBox,
            formControlName: "suffixIcon"
          },
          {
            componentProperty: {
              label: "Prefix & Suffix icon",
              appearance: Appearance.Outline,
              placeHolder: "Prefix & Suffix icon",
              attrType: InputTypes.Text,
              prefix: {
                isIcon: true,
                text: "euro",
                toolTipText: 'Euro dollar'
              },
              suffix: {
                isIcon: true,
                text: "done",
                toolTipText: 'Done icon'
              }
            },
            componentType: ComponentType.TextBox,
            formControlName: "prefixandSuffixIcon"
          }]
        }]
      }
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
