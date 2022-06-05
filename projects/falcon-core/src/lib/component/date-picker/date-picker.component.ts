import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { IComponentConfig } from '../../model/imeta';

@Component({
  selector: 'lib-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss','../../common/style.scss']
})
export class DatePickerComponent implements OnInit {
  @Input() field: IComponentConfig;
  @Input() group: UntypedFormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
