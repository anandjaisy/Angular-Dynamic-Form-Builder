import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IComponentConfig } from '../../view-models/imeta';

@Component({
  selector: 'falcon-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss','../../common/style.scss']
})
export class SelectComponent implements OnInit {
  field: IComponentConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
