import { Component, OnInit, Input } from '@angular/core';
import { IComponentConfig } from '../../model/imeta';
import { UntypedFormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'falcon-text-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  @Input() field: IComponentConfig;
  @Input() group: UntypedFormGroup;
  public editor = ClassicEditor;
  constructor() {}

  ngOnInit(): void {}
}
