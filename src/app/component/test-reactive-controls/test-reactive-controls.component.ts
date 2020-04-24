import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, ComponentPosition } from 'projects/falcon-core/src/lib/view-models/component-type.enum';
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
    this.controlsConfig = [
      {
        componentStyle: {
          name : "User Name",
          appearance : Appearance.Outline,
          placeHolder : "Place holder",
          prefix : {isIcon: true, text: "explore"},
          suffix: {isIcon: false, text: ".00"},
          hint : "testing",
          componentPosition : ComponentPosition.horizontal
        },
        componentType: ComponentType.TextBox,
        attrType: InputTypes.Text,
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
        componentStyle: {
          name : "Password",
          appearance : Appearance.Outline,
          placeHolder : "Place holder",
          componentPosition : ComponentPosition.vertical
        },
        componentType: ComponentType.TextBox,
        attrType: InputTypes.Password,
        formControlName: "password",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Name Required"
          }
        ]
      }
    ];
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
