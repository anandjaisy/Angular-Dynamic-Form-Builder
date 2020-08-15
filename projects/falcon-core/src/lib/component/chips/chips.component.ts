import { Component, OnInit, Input } from '@angular/core';
import { IComponentConfig } from '../../view-models/imeta';
@Component({
  selector: 'falcon-chip',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  @Input() field: IComponentConfig;
  constructor() { }

  ngOnInit(): void {
    console.log(this.field);
  }

}
