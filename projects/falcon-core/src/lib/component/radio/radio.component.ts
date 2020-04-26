import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IComponentConfig } from '../../view-models/imeta';
@Component({
  selector: 'lib-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  field: IComponentConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
