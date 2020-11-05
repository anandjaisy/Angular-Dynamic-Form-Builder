import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IComponentConfig } from '../../view-models/imeta';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'falcon-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {
  @Input() field: IComponentConfig;
  @Input() group: FormGroup;
  @Output() toggleGroupChange: EventEmitter<MatButtonToggleChange> = new EventEmitter<MatButtonToggleChange>();
  constructor() { }

  ngOnInit(): void {
    if (this.group === undefined) {
      this.group = new FormGroup({
        default: new FormControl()
      });
    }
  }

  toggleChange($event) {
    this.toggleGroupChange.emit($event.value);
  }

}
