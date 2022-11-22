import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import {
  ComponentType,
  InputTypes,
  FxLayout,
  AlignmentLayoutDirection,
  Appearance,
} from 'projects/falcon-core/src/lib/model/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-button-indicator',
  templateUrl: './button-indicator.component.html',
  styleUrls: ['./button-indicator.component.scss'],
})
export class ButtonIndicatorComponent
  extends BaseFormComponent<any>
  implements OnInit
{
  public codeGeneratorEnable: boolean = false;
  htmlButtonConfig = {
    componentProperty: {
      label: 'Basic',
      appearance: Appearance.Raised,
      color: 'primary',
      componentCss: 'w-100',
      componentStyle: { width: '100%' },
    },
    componentType: ComponentType.Button,
    formControlName: 'Basic',
  };
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();
  constructor() {
    super();
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
                  label: 'Basic',
                  appearance: Appearance.Basic,
                },
                componentType: ComponentType.Button,
                formControlName: 'Basic',
              },
              {
                componentProperty: {
                  label: 'Raised',
                  appearance: Appearance.Raised,
                  color: 'accent',
                },
                componentType: ComponentType.Button,
                formControlName: 'Raised',
              },
              {
                componentProperty: {
                  label: 'Stroked',
                  appearance: Appearance.Stroked,
                  color: 'primary',
                },
                componentType: ComponentType.Button,
                formControlName: 'Stroked',
              },
              {
                componentProperty: {
                  label: 'explore',
                  appearance: Appearance.Icon,
                  disabled: true,
                },
                componentType: ComponentType.Button,
                formControlName: 'Icon',
              },
              {
                componentProperty: {
                  label: 'delete',
                  appearance: Appearance.FAB,
                  color: 'warn',
                },
                componentType: ComponentType.Button,
                formControlName: 'FAB',
              },
              {
                componentProperty: {
                  label: 'thumb_up',
                  appearance: Appearance.MiniFAB,
                  color: 'primary',
                },
                componentType: ComponentType.Button,
                formControlName: 'miniFAB',
              },
              {
                componentProperty: {
                  label: 'Link',
                  appearance: Appearance.routeLink,
                },
                componentType: ComponentType.Button,
                formControlName: 'link',
              },
              {
                componentProperty: {
                  label: 'href',
                  appearance: Appearance.routeHref,
                  value: '/Account/Login',
                },
                componentType: ComponentType.Button,
                formControlName: 'linkHref',
              },
            ],
          },
        ],
      },
    };
  }

  ngOnInit(): void {
    this.form = this.createControls();
  }

  protected getDatasource(): Observable<any> {
    return of();
  }
  protected submitDatasource(model: any): Observable<any> {
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Button_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Button_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
