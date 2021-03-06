import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlignmentLayoutDirection, Appearance, BaseFormComponent, ComponentType, FxLayout, InputTypes } from 'projects/falcon-core/src/public-api';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.scss']
})
export class FormLayoutComponent extends BaseFormComponent<any> implements OnInit {

  constructor(fb: FormBuilder) {
    super(fb);
    this.defineForm();
  }

  ngOnInit(): void {
    this.form = this.createControls();
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
          fxLayoutAlignHorizontal: AlignmentLayoutDirection.End,
          fxLayoutAlignVertical: AlignmentLayoutDirection.End,
          componentConfig: [
            {
              componentProperty: {
                label: "Submit",
                appearance: Appearance.Raised,
                color: 'primary',
              },
              componentType: ComponentType.Button,
            },
            {
              componentProperty: {
                label: "Submit",
                appearance: Appearance.Raised,
                color: 'primary',
              },
              componentType: ComponentType.Button,
            }]
        }]
      }
    }
  }

  protected submitDatasource(model: any): Observable<any> {
    console.log(model);
    return of(model);
  }
}
