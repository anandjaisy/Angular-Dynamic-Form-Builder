import {
  Component,
  OnInit,
  Input,
  EventEmitter,
} from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {
  AlignmentLayoutDirection,
  Appearance,
  BaseFormComponent,
  ComponentType,
  FxLayout,
} from 'projects/falcon-core/src/public-api';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent
  extends BaseFormComponent<any>
  implements OnInit
{
  private productOptionEventEmitter: EventEmitter<MatCheckboxChange> =
    new EventEmitter<MatCheckboxChange>();
  constructor() {
    super();
    this.defineForm();
  }
  ngOnInit(): void {
    this.form = this.createControls();
    this.productOptionEventEmitter.subscribe((item) => {
      if (item.checked) this.addControls();
      else this.removeControls();
    });
  }

  protected defineForm(): void {
    this.controlsConfig = {
      container: {
        fxLayout: FxLayout.Column,
        fxLayoutAlignHorizontal:
          AlignmentLayoutDirection.SpaceBetween,
        fxLayoutAlignVertical: AlignmentLayoutDirection.None,
        fxLayoutGap: '20px',
        layoutConfig: [
          {
            fxLayout: FxLayout.Row,
            fxLayoutAlignHorizontal:
              AlignmentLayoutDirection.SpaceBetween,
            fxLayoutAlignVertical:
              AlignmentLayoutDirection.SpaceBetween,
            componentConfig: [
              {
                componentProperty: {
                  label:
                    'This product has multiple options, like different sizes or colors',
                  event: { change: this.productOptionEventEmitter },
                },
                componentType: ComponentType.Checkbox,
                formControlName: 'checkboxOption',
              },
              {
                componentProperty: {
                  label: 'Add option',
                  appearance: Appearance.Raised,
                  visible: false,
                },
                componentType: ComponentType.Button,
                formControlName: 'Raised',
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

  private addControls(): void {
    this.controlsConfig.container.layoutConfig[0].componentConfig[1].componentProperty.visible =
      true;
  }

  private removeControls(): void {
    this.controlsConfig.container.layoutConfig[0].componentConfig[1].componentProperty.visible =
      false;
  }
}
