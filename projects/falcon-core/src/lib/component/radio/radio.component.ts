import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IComponentConfig } from '../../model/imeta';
import { MatRadioChange } from '@angular/material/radio';
@Component({
  selector: 'falcon-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() field: IComponentConfig;
  @Input() group: FormGroup;
  @Output() radioGroupChange: EventEmitter<MatRadioChange> = new EventEmitter<MatRadioChange>();
  constructor() { }

  ngOnInit(): void {
    if (this.group === undefined) {
      this.group = new FormGroup({
        default: new FormControl()
      });
    }
  }

  radioGroupChangeEvent($event) {
    this.radioGroupChange.emit($event.value);
  }

}
