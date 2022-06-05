import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { IComponentConfig } from '../../model/imeta';
import { Appearance } from '../../model/component-type.enum';

@Component({
  selector: 'falcon-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() field: IComponentConfig;
  @Input() group: UntypedFormGroup;
  @Output() btnClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  childBtnClick() {
    this.btnClick.emit("Button Click Event");
  }

}
