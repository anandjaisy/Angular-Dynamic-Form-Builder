import { Component, OnInit } from '@angular/core';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  BaseFormComponent,
  AlignmentLayoutDirection,
  FxLayout,
  ComponentType,
} from 'projects/falcon-core/src/public-api';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-angular-editor',
  templateUrl: './angular-editor.component.html',
  styleUrls: ['./angular-editor.component.scss'],
})
export class AngularEditorComponent
  extends BaseFormComponent<any>
  implements OnInit
{
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();

  constructor(fb: UntypedFormBuilder) {
    super(fb);
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
                    toolbar: [
                      'undo',
                      'redo',
                      '|',
                      'heading',
                      'fontFamily',
                      'fontSize',
                      '|',
                      'bold',
                      'italic',
                      'underline',
                      'fontColor',
                      'fontBackgroundColor',
                      'highlight',
                      '|',
                      'link',
                      'CKFinder',
                      'imageUpload',
                      'mediaEmbed',
                      '|',
                      'alignment',
                      'bulletedList',
                      'numberedList',
                      '|',
                      'indent',
                      'outdent',
                      '|',
                      'insertTable',
                      'blockQuote',
                      'specialCharacters',
                    ],
                    language: 'id',
                    image: {
                      toolbar: [
                        'imageTextAlternative',
                        'imageStyle:full',
                        'imageStyle:side',
                      ],
                    },
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

  protected getDatasource(): Observable<any> {
    return of();
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
