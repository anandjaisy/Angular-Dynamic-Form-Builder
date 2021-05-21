import { Component, OnInit } from '@angular/core';
import { IComponentConfig } from '../../model/imeta';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss','../../common/style.scss']
})
export class TextAreaComponent implements OnInit {
  field: IComponentConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
