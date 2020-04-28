import { Component, OnInit, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, ComponentPosition, AlignmentLayoutDirection, Floatinglabel, ButtonTypes } from 'projects/falcon-core/src/lib/view-models/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-button-indicator',
  templateUrl: './button-indicator.component.html',
  styleUrls: ['./button-indicator.component.scss']
})
export class ButtonIndicatorComponent extends BaseFormComponent<any> implements OnInit {
  public codeGeneratorEnable: boolean = false;
  htmlButtonConfig = {componentProperty: {label: "Basic",attrType: ButtonTypes.Raised, color:"primary"},componentType: ComponentType.Button,formControlName: "Basic"}
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
          label: "Basic",
          attrType: ButtonTypes.Basic
        },
        componentType: ComponentType.Button,
        formControlName: "Basic",
      },
      {
        componentProperty: {
          label: "Raised",
          attrType: ButtonTypes.Raised,
          color: 'accent'
        },
        componentType: ComponentType.Button,
        formControlName: "Raised"
      },
      {
        componentProperty: {
          label: "Stroked",
          attrType: ButtonTypes.Stroked,
          color: 'primary'
        },
        componentType: ComponentType.Button,
        formControlName: "Stroked"
      },
      {
        componentProperty: {
          label: "explore",
          attrType: ButtonTypes.Icon,
          disabled : true
        },
        componentType: ComponentType.Button,
        formControlName: "Icon"
      },
      {
        componentProperty: {
          label: "delete",
          attrType: ButtonTypes.FAB,
          color: 'warn'
        },
        componentType: ComponentType.Button,
        formControlName: "FAB"
      },
      {
        componentProperty: {
          label: "thumb_up",
          attrType: ButtonTypes.MiniFAB,
          color: 'primary'
        },
        componentType: ComponentType.Button,
        formControlName: "miniFAB"
      },
      {
        componentProperty: {
          label: "Link",
          attrType: ButtonTypes.Link
        },
        componentType: ComponentType.Button,
        formControlName: "link"
      }
      ]
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
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.Button_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.Button_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
