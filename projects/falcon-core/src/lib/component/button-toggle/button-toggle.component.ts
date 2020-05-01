import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IComponentConfig } from '../../view-models/imeta';

@Component({
  selector: 'lib-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {
  @Input() field: IComponentConfig;
  @Input() group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
