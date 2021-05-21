import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestReactiveControlsComponent } from './component/test-reactive-controls/test-reactive-controls.component';
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
import { TextAreaComponent } from './component/text-area/text-area.component';
import { ButtonToggleComponent } from './component/button-toggle/button-toggle.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './component/progress-spinner/progress-spinner.component';
import { ExampleBottomSheetComponent } from './component/bottom-sheet/bottom-sheet.component';
import { SnackbarComponent } from './component/snackbar/snackbar.component';
import { ModalDialogComponent } from './component/modal-dialog/modal-dialog.component';
import { ChipsComponent } from './component/chips/chips.component';
import { TableComponent } from './component/table/table.component';
import { AppPaginationComponent } from './component/pagination/app-pagination.component';
import { AuthCallbackComponent } from './component/auth-callback/auth-callback.component';
import { AngularEditorComponent } from './component/angular-editor/angular-editor.component';
import { FormComponent } from './component/form/form.component';


const routes: Routes = [
  {path: 'auth-callback', component: AuthCallbackComponent},
  {path: '', component: TestReactiveControlsComponent},
  {path: 'input', component: InputComponent},
  {path: 'auto-complete', component: AutoCompleteComponent},
  {path: 'checkbox', component: CheckboxComponent},
  {path: 'datepicker', component: DatepickerComponent},
  {path: 'form-field', component: FormFieldComponent},
  {path: 'radio', component: RadioComponent},
  {path: 'select', component: SelectComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'slide-toggle', component: SlideToggleComponent},
  {path: 'button-indicator', component: ButtonIndicatorComponent},
  {path: 'text-area', component: TextAreaComponent},
  {path: 'button-toggle', component: ButtonToggleComponent},
  {path: 'progress-spinner', component: ProgressSpinnerComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
  {path: 'bottom-sheet', component: ExampleBottomSheetComponent},
  {path: 'snackbar', component: SnackbarComponent},
  {path: 'dialog', component: ModalDialogComponent},
  {path: 'chips', component: ChipsComponent},
  {path: 'tables', component: TableComponent},
  {path: 'pagination', component: AppPaginationComponent},
  {path: 'editor', component: AngularEditorComponent},
  {path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
