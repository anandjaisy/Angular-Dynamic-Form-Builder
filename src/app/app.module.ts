import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestReactiveControlsComponent } from './component/test-reactive-controls/test-reactive-controls.component';
import {
  FalconCoreModule,
  HttpFalconInterceptor,
} from 'projects/falcon-core/src/public-api';
import { InputComponent } from './component/input/input.component';
import { AutoCompleteComponent } from './component/auto-complete/auto-complete.component';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { DatepickerComponent } from './component/datepicker/datepicker.component';
import { FormFieldComponent } from './component/form-field/form-field.component';
import { RadioComponent } from './component/radio/radio.component';
import { SelectComponent } from './component/select/select.component';
import { SliderComponent } from './component/slider/slider.component';
import { SlideToggleComponent } from './component/slide-toggle/slide-toggle.component';
import { ButtonIndicatorComponent } from './component/button-indicator/button-indicator.component';
import { CodeGeneratorComponent } from './component/code-generator/code-generator.component';
import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions,
} from 'ngx-highlightjs';
import { InputFloatingLabelComponent } from './component/input/input-floating-label/input-floating-label.component';
import { CodeButtonComponent } from './common/component/code-button/code-button.component';
import { InputHintComponent } from './component/input/input-hint/input-hint.component';
import { InputErrorComponent } from './component/input/input-error/input-error.component';
import { InputPrefixSuffixComponent } from './component/input/input-prefix-suffix/input-prefix-suffix.component';
import { TextAreaComponent } from './component/text-area/text-area.component';
import { ButtonToggleComponent } from './component/button-toggle/button-toggle.component';
import { ProgressSpinnerComponent } from './component/progress-spinner/progress-spinner.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { ExampleBottomSheetComponent } from './component/bottom-sheet/bottom-sheet.component';
import { SnackbarComponent } from './component/snackbar/snackbar.component';
import { ModalDialogComponent } from './component/modal-dialog/modal-dialog.component';
import { FormFieldExampleComponent } from './component/form-field/form-field-example/form-field-example.component';
import { environment } from 'src/environments/environment';
import { EnvironmentViewModel } from 'projects/falcon-core/src/lib/model/environment-view-model';
import { ChipsComponent } from './component/chips/chips.component';
import { ChildLayoutComponent } from './component/form-field/form-layout-child-layout/child-layout.component';
import { TableComponent } from './component/table/table.component';
import { TableFilterComponent } from './component/table/table-filter/table-filter.component';
import { TablePaginationComponent } from './component/table/table-pagination/table-pagination.component';
import { ButtonToggleHtmlComponent } from './component/button-toggle/button-toggle-html/button-toggle-html.component';
import { RadioHtmlComponent } from './component/radio/radio-html/radio-html.component';
import { SelectHtmlComponent } from './component/select/select-html/select-html.component';
import { AppPaginationComponent } from './component/pagination/app-pagination.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthCallbackComponent } from './component/auth-callback/auth-callback.component';
import { ChipsAutocompleteComponent } from './component/chips/chips-autocomplete/chips-autocomplete.component';
import { ChipsWithinputComponent } from './component/chips/chips-withinput/chips-withinput.component';
import { ChipsDragDropComponent } from './component/chips/chips-drag-drop/chips-drag-drop.component';
import { FormComponent } from './component/form/form.component';
import { FormChildComponent } from './component/form/form-child/form-child.component';
import { FormNextedChildComponent } from './component/form-field/form-nexted-child/form-nexted-child.component';
import { FormLayoutComponent } from './component/form/form-layout/form-layout.component';
import { NextedformArrayComponent } from './component/form/nextedform-array/nextedform-array.component';
import { DynamicFormComponent } from './component/form/dynamic-form/dynamic-form.component';
import { TableActionMenuComponent } from './component/table/table-action-menu/table-action-menu.component';
import { AngularRichTextEditorComponent } from './component/rich-text-editor/rich-text-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TestReactiveControlsComponent,
    InputComponent,
    AutoCompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormFieldComponent,
    RadioComponent,
    SelectComponent,
    SliderComponent,
    SlideToggleComponent,
    ButtonIndicatorComponent,
    CodeGeneratorComponent,
    InputFloatingLabelComponent,
    CodeButtonComponent,
    InputHintComponent,
    InputErrorComponent,
    InputPrefixSuffixComponent,
    TextAreaComponent,
    ButtonToggleComponent,
    ProgressSpinnerComponent,
    ProgressBarComponent,
    ExampleBottomSheetComponent,
    SnackbarComponent,
    ModalDialogComponent,
    FormFieldExampleComponent,
    ChipsComponent,
    ChildLayoutComponent,
    TableComponent,
    TableFilterComponent,
    TablePaginationComponent,
    ButtonToggleHtmlComponent,
    RadioHtmlComponent,
    SelectHtmlComponent,
    AppPaginationComponent,
    AuthCallbackComponent,
    ChipsAutocompleteComponent,
    ChipsWithinputComponent,
    ChipsDragDropComponent,
    FormComponent,
    FormChildComponent,
    FormNextedChildComponent,
    FormLayoutComponent,
    NextedformArrayComponent,
    DynamicFormComponent,
    TableActionMenuComponent,
    AngularRichTextEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FalconCoreModule.forRoot(environment),
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{ lineNumbers: true },
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpFalconInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
