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
import { DeleteDialogComponent } from 'projects/falcon-core/src/lib/component/delete-dialog/delete-dialog.component';
import { ExampleBottomSheetComponent } from './component/bottom-sheet/bottom-sheet.component';
import { SnackbarComponent } from './component/snackbar/snackbar.component';


const routes: Routes = [
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
  {path: 'dialog', component: DeleteDialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
