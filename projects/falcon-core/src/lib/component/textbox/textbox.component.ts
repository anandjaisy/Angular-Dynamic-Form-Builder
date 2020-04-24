import { Component, OnInit } from '@angular/core';
import { IComponentConfig } from '../../view-models/imeta';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'falcon-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  field: IComponentConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {
    console.log(this.field);
  }

}
