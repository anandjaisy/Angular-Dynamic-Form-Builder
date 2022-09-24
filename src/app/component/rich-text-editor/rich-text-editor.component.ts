import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import {
  AlignmentLayoutDirection,
  BaseFormComponent,
  ComponentType,
  FxLayout,
} from 'projects/falcon-core/src/public-api';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
})
/**
 * For this component this library is used https://github.com/kolkov/angular-editor
 */
export class AngularRichTextEditorComponent
  extends BaseFormComponent<any>
  implements OnInit
{
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();

  constructor() {
    super();
    this.defineForm();
  }

  ngOnInit(): void {
    this.form = this.createControls();
  }

  protected defineForm(): void {
    this.controlsConfig = {
      container: {
        fxLayout: FxLayout.Column,
        fxLayoutAlignHorizontal:
          AlignmentLayoutDirection.SpaceBetween,
        fxLayoutAlignVertical: AlignmentLayoutDirection.None,
        layoutConfig: [
          {
            fxLayout: FxLayout.Row,
            fxLayoutGap: '10px',
            fxLayoutAlignHorizontal:
              AlignmentLayoutDirection.SpaceAround,
            fxLayoutAlignVertical:
              AlignmentLayoutDirection.SpaceAround,
            componentConfig: [
              {
                componentProperty: {
                  editorProperty: {
                    editable: true,
                    spellcheck: true,
                    height: 'auto',
                    minHeight: '0',
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
                      {
                        class: 'times-new-roman',
                        name: 'Times New Roman',
                      },
                      { class: 'calibri', name: 'Calibri' },
                      {
                        class: 'comic-sans-ms',
                        name: 'Comic Sans MS',
                      },
                    ],
                    customClasses: [
                      {
                        name: 'quote',
                        class: 'quote',
                      },
                      {
                        name: 'redText',
                        class: 'redText',
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
                      ['fontSize'],
                    ],
                  },
                },
                validations: [
                  {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Required Field',
                  },
                ],
                componentType: ComponentType.Editor,
                formControlName: 'editor',
              },
            ],
          },
        ],
      },
    };
  }
  protected submitDatasource(model: any): Observable<any> {
    console.log(model);
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.ANGULAR_EDITOR_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.ANGULAR_EDITOR_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
