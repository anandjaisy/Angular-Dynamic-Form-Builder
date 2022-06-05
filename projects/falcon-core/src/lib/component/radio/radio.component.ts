import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { IComponentConfig } from '../../model/imeta';
import { MatRadioChange } from '@angular/material/radio';
@Component({
  selector: 'falcon-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() field: IComponentConfig;
  @Input() group: UntypedFormGroup;
  @Output() radioGroupChange: EventEmitter<MatRadioChange> = new EventEmitter<MatRadioChange>();
  constructor() { }

  ngOnInit(): void {
    if (this.group === undefined) {
      this.group = new UntypedFormGroup({
        default: new UntypedFormControl()
      });
    }
  }

  radioGroupChangeEvent($event) {
    this.radioGroupChange.emit($event.value);
  }

}
