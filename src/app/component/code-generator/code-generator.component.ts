import { Component, OnInit, Input } from '@angular/core';
import { IMeta } from 'projects/falcon-core/src/lib/view-models/imeta';

@Component({
  selector: 'app-code-generator',
  templateUrl: './code-generator.component.html',
  styleUrls: ['./code-generator.component.scss']
})
export class CodeGeneratorComponent implements OnInit {
  @Input() tsConfig: string;
  code : any;
  constructor() { }

  ngOnInit(): void {
    this.code = `${this.tsConfig}`;
  }

}
