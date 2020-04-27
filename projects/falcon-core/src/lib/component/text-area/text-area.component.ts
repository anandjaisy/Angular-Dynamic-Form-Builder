import { Component, OnInit } from '@angular/core';
import { IComponentConfig } from '../../view-models/imeta';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {
  field: IComponentConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
