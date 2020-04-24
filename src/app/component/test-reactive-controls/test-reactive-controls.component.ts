import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, ComponentPosition, AlignmentLayoutDirection } from 'projects/falcon-core/src/lib/view-models/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-test-reactive-controls',
  templateUrl: './test-reactive-controls.component.html',
  styleUrls: ['./test-reactive-controls.component.scss']
})
export class TestReactiveControlsComponent extends BaseFormComponent<any> implements OnInit {
  constructor(fb : FormBuilder) {
    super(fb);
    this.defineForm();
  }
  
  protected defineForm(): void { 
    this.controlsConfig =
      {
        layoutConfig : {
          layoutDirection: ComponentPosition.Row,
          fxLayoutGap : "10px",
          alignmentLayoutDirectionHorizontal : AlignmentLayoutDirection.SpaceBetween,
          alignmentLayoutDirectionVertical : AlignmentLayoutDirection.SpaceBetween
        },
        componentConfig:[{
          componentProperty: {
            name : "User Name",
            appearance : Appearance.Outline,
            placeHolder : "Place holder",
            prefix : {isIcon: true, text: "explore"},
            suffix: {isIcon: false, text: ".00"},
            hint : "testing",
            attrType: InputTypes.Text,
          },
          componentType: ComponentType.TextBox,
          formControlName: "name",
          validations: [
            {
              name: "required",
              validator: Validators.required,
              message: "Name Required"
            },
            {
              name: "pattern",
              validator: Validators.pattern("^[a-zA-Z]+$"),
              message: "Accept only text"
            }
          ]
        },
        {
          componentProperty: {
            name : "Password",
            appearance : Appearance.Outline,
            placeHolder : "Place holder",
            attrType: InputTypes.Password,
          },
          componentType: ComponentType.TextBox,
          formControlName: "name",
          validations: [
            {
              name: "required",
              validator: Validators.required,
              message: "Name Required"
            },
            {
              name: "pattern",
              validator: Validators.pattern("^[a-zA-Z]+$"),
              message: "Accept only text"
            }
          ]
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


}
