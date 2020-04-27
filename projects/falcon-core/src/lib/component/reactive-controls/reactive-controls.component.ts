import { Component, OnInit,Input, ViewEncapsulation } from '@angular/core';
import { IMeta } from '../../view-models/imeta';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { ComponentType } from '../../view-models/component-type.enum';
import { BaseFormComponent } from '../../common/base-form-component';

@Component({
  selector: 'reactive-controls',
  templateUrl: './reactive-controls.component.html',
  styleUrls: ['./reactive-controls.component.css']
})
export class ReactiveControlsComponent implements OnInit {
  
  @Input() form: FormGroup;
  @Input() fields: IMeta;
  constructor() { 
  }
  ngOnInit(): void {
  }
}
