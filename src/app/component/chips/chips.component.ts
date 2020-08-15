import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../../projects/falcon-core/src/lib/common/base-form-component';
import { FormBuilder } from '@angular/forms';
import { AngularCodeTemplateViewModel } from '../../../../src/app/common/angularCodeTemplateViewModel';
import { ComponentType, InputTypes, FxLayout, AlignmentLayoutDirection, Appearance } from '../../../../projects/falcon-core/src/lib/view-models/component-type.enum';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplate } from '../../../../src/app/common/angularCodeTemplate';


@Component({
  selector: 'ui-chip',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent extends BaseFormComponent<any> implements OnInit {
  public codeGeneratorEnable: boolean = false;
  htmlChipConfig = {componentProperty: {label: "Basic", color:"accent"},componentType: ComponentType.Chip,formControlName: "Basic"}
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();
  constructor(fb: FormBuilder) {
    super(fb);
  }

  ngOnInit(): void {
  }
  protected defineForm(): void {}

  protected getDatasource(): Observable<any> {
    return of();
  }
  protected submitDatasource(model: any): Observable<any> {
    console.log(model);
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.Chips_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.Chips_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

}
