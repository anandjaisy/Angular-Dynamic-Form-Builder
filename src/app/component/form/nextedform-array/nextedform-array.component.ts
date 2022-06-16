import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import {
  AlignmentLayoutDirection,
  Appearance,
  BaseFormComponent,
  ComponentType,
  FxLayout,
  InputTypes,
} from 'projects/falcon-core/src/public-api';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nextedform-array',
  templateUrl: './nextedform-array.component.html',
  styleUrls: ['./nextedform-array.component.scss'],
})
export class NextedformArrayComponent
  extends BaseFormComponent<any>
  implements OnInit
{
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
              AlignmentLayoutDirection.SpaceBetween,
            fxLayoutAlignVertical:
              AlignmentLayoutDirection.SpaceBetween,
            componentConfig: [
              {
                formControlName: 'level-1',
                formArray: [
                  {
                    fxLayout: FxLayout.Row,
                    fxLayoutGap: '10px',
                    fxLayoutAlignHorizontal:
                      AlignmentLayoutDirection.SpaceBetween,
                    fxLayoutAlignVertical:
                      AlignmentLayoutDirection.SpaceBetween,
                    componentConfig: [
                      {
                        formControlName: 'firstElement',
                        formArray: [
                          {
                            fxLayout: FxLayout.Row,
                            fxLayoutGap: '10px',
                            fxLayoutAlignHorizontal:
                              AlignmentLayoutDirection.SpaceBetween,
                            fxLayoutAlignVertical:
                              AlignmentLayoutDirection.SpaceBetween,
                            componentConfig: [
                              {
                                componentProperty: {
                                  label: 'Level 1 -1',
                                  appearance: Appearance.Legacy,
                                  placeHolder: 'Level 1 -1',
                                  attrType: InputTypes.Text,
                                },
                                validations: [
                                  {
                                    name: 'required',
                                    validator: Validators.required,
                                    message: 'Required Field',
                                  },
                                ],
                                componentType: ComponentType.TextBox,
                                formControlName: 'level1-1',
                              },
                              {
                                componentProperty: {
                                  label: 'Level 1-2',
                                  appearance: Appearance.Legacy,
                                  placeHolder: 'Level 1-2',
                                  attrType: InputTypes.Text,
                                },
                                validations: [
                                  {
                                    name: 'required',
                                    validator: Validators.required,
                                    message: 'Required Field',
                                  },
                                ],
                                componentType: ComponentType.TextBox,
                                formControlName: 'level1-2',
                              },
                              {
                                formControlName: 'level1-3',
                                formArray: [
                                  {
                                    fxLayout: FxLayout.Row,
                                    fxLayoutGap: '10px',
                                    fxLayoutAlignHorizontal:
                                      AlignmentLayoutDirection.SpaceBetween,
                                    fxLayoutAlignVertical:
                                      AlignmentLayoutDirection.SpaceBetween,
                                    componentConfig: [
                                      {
                                        componentProperty: {
                                          label: 'Level 3-1',
                                          appearance:
                                            Appearance.Legacy,
                                          placeHolder:
                                            'First Element First Next',
                                          attrType: InputTypes.Text,
                                        },
                                        validations: [
                                          {
                                            name: 'required',
                                            validator:
                                              Validators.required,
                                            message: 'Required Field',
                                          },
                                        ],
                                        componentType:
                                          ComponentType.TextBox,
                                        formControlName: 'level3-1',
                                      },
                                      {
                                        componentProperty: {
                                          label: 'Level 3-2',
                                          appearance:
                                            Appearance.Legacy,
                                          placeHolder:
                                            'First Element First Next',
                                          attrType: InputTypes.Text,
                                        },
                                        validations: [
                                          {
                                            name: 'required',
                                            validator:
                                              Validators.required,
                                            message: 'Required Field',
                                          },
                                        ],
                                        componentType:
                                          ComponentType.TextBox,
                                        formControlName: 'level3-2',
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                componentProperty: {
                                  label: 'Level 4-1',
                                  appearance: Appearance.Legacy,
                                  placeHolder:
                                    'First Element First Next',
                                  attrType: InputTypes.Text,
                                },
                                validations: [
                                  {
                                    name: 'required',
                                    validator: Validators.required,
                                    message: 'Required Field',
                                  },
                                ],
                                componentType: ComponentType.TextBox,
                                formControlName: 'level4-1',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        componentProperty: {
                          label: 'Second Element',
                          appearance: Appearance.Legacy,
                          placeHolder: 'Second Element',
                          attrType: InputTypes.Text,
                        },
                        validations: [
                          {
                            name: 'required',
                            validator: Validators.required,
                            message: 'Required Field',
                          },
                        ],
                        componentType: ComponentType.TextBox,
                        formControlName: 'secondElement',
                      },
                    ],
                  },
                ],
              },
              {
                componentProperty: {
                  label: 'Submit',
                  appearance: Appearance.Raised,
                  color: 'primary',
                  attrType: InputTypes.Submit,
                },
                componentType: ComponentType.Button,
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
}
