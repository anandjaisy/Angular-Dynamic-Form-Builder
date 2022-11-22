import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  AlignmentLayoutDirection,
  Appearance,
  BaseFormComponent,
  ComponentType,
  FxLayout,
  InputTypes,
} from 'projects/falcon-core/src/public-api';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.scss'],
})
export class FormLayoutComponent
  extends BaseFormComponent<any>
  implements OnInit
{
  constructor() {
    super();
    this.defineForm();
  }

  ngOnInit(): void {
    this.form = this.createControls();
  }
  protected defineForm(): void {
    this.controlsConfig = {
      container: {
        fxLayout: FxLayout.Column,
        fxLayoutGap: '10px',
        fxLayoutAlignHorizontal:
          AlignmentLayoutDirection.SpaceBetween,
        fxLayoutAlignVertical: AlignmentLayoutDirection.None,
        layoutConfig: [
          {
            fxLayout: FxLayout.Row,
            fxLayoutGap: '10px',
            fxLayoutAlignHorizontal: AlignmentLayoutDirection.End,
            fxLayoutAlignVertical: AlignmentLayoutDirection.End,
            componentConfig: [
              {
                componentProperty: {
                  label: 'Submit',
                  appearance: Appearance.Raised,
                  color: 'primary',
                },
                componentType: ComponentType.Button,
              },
              {
                componentProperty: {
                  label: 'Submit',
                  appearance: Appearance.Raised,
                  color: 'primary',
                },
                componentType: ComponentType.Button,
              },
            ],
          },
          {
            fxLayout: FxLayout.Row,
            fxLayoutGap: '10px',
            fxLayoutAlignHorizontal: AlignmentLayoutDirection.Start,
            fxLayoutAlignVertical: AlignmentLayoutDirection.Center,
            componentConfig: [
              {
                componentProperty: {
                  label: 'Submit',
                  appearance: Appearance.Raised,
                  color: 'primary',
                  fxFlexLayout: { fxFlex: '49%' },
                },
                componentType: ComponentType.Button,
              },
              {
                componentProperty: {
                  label: 'Submit',
                  appearance: Appearance.Raised,
                  color: 'primary',
                  fxFlexLayout: { fxFlex: '24%' },
                },
                componentType: ComponentType.Button,
              },
              {
                componentProperty: {
                  label: 'Submit',
                  appearance: Appearance.Raised,
                  color: 'primary',
                  fxFlexLayout: { fxFlex: '24%' },
                },
                componentType: ComponentType.Button,
              },
            ],
          },
        ],
      },
    };
  }

  protected submitDatasource(model: any): Observable<any> {
    return of(model);
  }
}
