import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IComponentConfig } from '../../view-models/imeta';
import { Appearance } from '../../view-models/component-type.enum';

@Component({
  selector: 'falcon-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  buttonTypes = Appearance
  @Input() field: IComponentConfig;
  @Input() group: FormGroup;
  @Output() btnClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  childBtnClick() {
    this.btnClick.emit("Button Click Event");
  }

}
