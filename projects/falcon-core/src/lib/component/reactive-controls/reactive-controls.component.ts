import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IMeta } from '../../model/imeta';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ComponentType } from '../../model/component-type.enum';
import { BaseFormComponent } from '../../common/base-form-component';

@Component({
  selector: 'reactive-controls',
  templateUrl: './reactive-controls.component.html',
  styleUrls: ['./reactive-controls.component.css']
})
export class ReactiveControlsComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() fields: IMeta;
  constructor() {
  }
  ngOnInit(): void {
    console.log(this.formGroup);
  }
}
