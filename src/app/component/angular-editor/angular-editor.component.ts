import { Component, OnInit } from '@angular/core';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { BaseFormComponent, AlignmentLayoutDirection, FxLayout, Appearance, ComponentType, InputTypes } from 'projects/falcon-core/src/public-api';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-angular-editor',
  templateUrl: './angular-editor.component.html',
  styleUrls: ['./angular-editor.component.scss']
})
export class AngularEditorComponent extends BaseFormComponent<any> implements OnInit {
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();

  constructor(fb: FormBuilder) {
    super(fb);
    this.defineForm();
  }

  ngOnInit(): void {
    this.form = this.createControls();
  }

  protected defineForm(): void {
    this.controlsConfig =
    {
      layoutConfig: [{
        fxLayout: FxLayout.Row,
        fxLayoutGap: "10px",
        fxLayoutAlignHorizontal: AlignmentLayoutDirection.SpaceAround,
        fxLayoutAlignVertical: AlignmentLayoutDirection.SpaceAround,
        componentConfig: [{
          componentProperty: {
            editorProperty: {
              editable: true,
              spellcheck: true,
              height: 'auto',
              minHeight: '420px',
              maxHeight: 'auto',
              width: 'auto',
              minWidth: '0',
              translate: 'yes',
              enableToolbar: true,
              showToolbar: true,
              placeholder: 'Enter text here...',
              defaultParagraphSeparator: '',
              defaultFontName: '',
              defaultFontSize: '',
              fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' }
              ],
              customClasses: [
                {
                  name: 'quote',
                  class: 'quote',
                },
                {
                  name: 'redText',
                  class: 'redText'
                },
                {
                  name: 'titleText',
                  class: 'titleText',
                  tag: 'h1',
                },
              ],
              uploadUrl: 'v1/image',
              uploadWithCredentials: false,
              sanitize: true,
              toolbarPosition: 'top',
              toolbarHiddenButtons: [
                ['bold', 'italic'],
                ['fontSize']
              ]
            }
          },
          validations: [
            {
              name: "required",
              validator: Validators.required,
              message: "Required Field"
            }],
          componentType: ComponentType.Editor,
          formControlName: "editor",
        }], 
        
      }]
    }
  }

  protected getDatasource(): Observable<any> {
    return of();
  }
  protected submitDatasource(model: any): Observable<any> {
    console.log(model);
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.ANGULAR_EDITOR_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.ANGULAR_EDITOR_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

}
