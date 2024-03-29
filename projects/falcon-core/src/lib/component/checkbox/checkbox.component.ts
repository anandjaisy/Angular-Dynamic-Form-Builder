import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { IComponentConfig } from '../../model/imeta';
@Component({
  selector: 'falcon-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  field: IComponentConfig;
  group: UntypedFormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  change($event) {
    if (this.field.componentProperty.event !== undefined)
      this.field.componentProperty.event.change.emit($event);
  }
}
