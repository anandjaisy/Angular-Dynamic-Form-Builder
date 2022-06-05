import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { IComponentConfig } from '../../model/imeta';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'falcon-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss', '../../common/style.scss']
})
export class SelectComponent implements OnInit {
  @Input() field: IComponentConfig;
  @Input() group: UntypedFormGroup;
  @Output() selectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();
  constructor() { }

  ngOnInit(): void {
    if (this.group === undefined) {
      this.group = new UntypedFormGroup({
        default: new UntypedFormControl()
      });
    }
  }

  selectChange($event) {
    this.selectionChange.emit($event.value);
    if (this.field.componentProperty.event !== undefined)
      this.field.componentProperty.event.change.emit($event);
  }

}
