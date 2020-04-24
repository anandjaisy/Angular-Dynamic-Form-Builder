import { Component, OnInit } from '@angular/core';
import { IMeta } from '../../view-models/imeta';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'falcon-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  field: IMeta;
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {
    console.log(this.field);
  }

}
