import { Component, OnInit, Input } from '@angular/core';
import { IComponentConfig } from '../../model/imeta';
import { FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'lib-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() field: IComponentConfig;
  @Input() group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
