import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IComponentConfig } from '../../view-models/imeta';
@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  field: IComponentConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
