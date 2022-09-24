import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { IComponentConfig } from '../../model/imeta';

@Component({
  selector: 'lib-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
})
export class RichTextEditorComponent implements OnInit {
  @Input() field: IComponentConfig;
  @Input() group: UntypedFormGroup;
  constructor() {}

  ngOnInit(): void {
    console.log(this.field);
    console.log(this.group);
  }
}
