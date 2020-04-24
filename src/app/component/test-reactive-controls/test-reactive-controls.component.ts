import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { IMeta } from 'projects/falcon-core/src/lib/view-models/imeta';
import { ComponentType, InputTypes, Appearance } from 'projects/falcon-core/src/lib/view-models/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';


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
    this.regConfig = [
      {
        componentStyle: {
          name : "Label Name",
          appearance : Appearance.Outline,
          placeHolder : "Place holder",
          prefix : {isIcon: true, text: "explore"},
          suffix: {isIcon: false, text: ".00"},
          hint : "testing"
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
      }
    ];
  }


  ngOnInit(): void {
    this.form = this.createControl();
  }

  protected getDatasource(): import("rxjs").Observable<any> {
    throw new Error("Method not implemented.");
  }
  protected submitDatasource(model: any): import("@angular/core").EventEmitter<any> {
    throw new Error("Method not implemented.");
  }


}
