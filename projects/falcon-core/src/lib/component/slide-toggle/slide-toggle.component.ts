import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { IComponentConfig } from '../../model/imeta';

@Component({
  selector: 'lib-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
})
export class SlideToggleComponent implements OnInit {
  field: IComponentConfig;
  group: UntypedFormGroup;
  constructor() {}

  ngOnInit(): void {}
}
