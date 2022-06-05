import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { IComponentConfig } from '../../model/imeta';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'falcon-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {
  @Input() field: IComponentConfig;
  @Input() group: UntypedFormGroup;
  @Output() toggleGroupChange: EventEmitter<MatButtonToggleChange> = new EventEmitter<MatButtonToggleChange>();
  constructor() { }

  ngOnInit(): void {
    if (this.group === undefined) {
      this.group = new UntypedFormGroup({
        default: new UntypedFormControl()
      });
    }
  }

  toggleChange($event) {
    this.toggleGroupChange.emit($event.value);
  }

}
