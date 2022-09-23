import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { IComponentConfig } from '../../model/imeta';

@Component({
  selector: 'falcon-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  field: IComponentConfig;
  group: UntypedFormGroup;
  constructor() {}

  ngOnInit(): void {}
}
