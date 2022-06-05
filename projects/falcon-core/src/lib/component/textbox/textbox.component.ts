import { Component, OnInit } from '@angular/core';
import { IComponentConfig } from '../../model/imeta';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'falcon-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss','../../common/style.scss']
})
export class TextboxComponent implements OnInit {
  field: IComponentConfig;
  group: UntypedFormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
