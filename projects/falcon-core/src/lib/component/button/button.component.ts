import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IComponentConfig } from '../../view-models/imeta';
import { ButtonTypes } from '../../view-models/component-type.enum';

@Component({
  selector: 'falcon-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  buttonTypes = ButtonTypes
  @Input() field: IComponentConfig;
  @Input() group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
