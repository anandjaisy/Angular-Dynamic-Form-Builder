import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ReactiveFieldDirective } from './directive/reactive-field.directive';
import { TextboxComponent } from './component/textbox/textbox.component';
import { ReactiveControlsComponent } from './component/reactive-controls/reactive-controls.component';
import { AngularMaterialModule } from './module/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { IGenericHttpClient } from './service/igeneric-http-client';
import { GenericHttpClientService } from './service/generic-http-client.service';
import { appSettingsFactory, AppSettingServiceService } from './service/app-setting-service.service';
import { RadioComponent } from './component/radio/radio.component';
import { TextAreaComponent } from './component/text-area/text-area.component';
import { SelectComponent } from './component/select/select.component';
import { DatePickerComponent } from './component/date-picker/date-picker.component';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { ButtonComponent } from './component/button/button.component';
import { SlideToggleComponent } from './component/slide-toggle/slide-toggle.component';
import { SliderComponent } from './component/slider/slider.component';
import { ButtonToggleComponent } from './component/button-toggle/button-toggle.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './component/progress-spinner/progress-spinner.component';
import { BottomSheetComponent } from './component/bottom-sheet/bottom-sheet.component';
import { DeleteDialogComponent } from './component/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [ReactiveFieldDirective, TextboxComponent, ReactiveControlsComponent, RadioComponent, TextAreaComponent, SelectComponent, DatePickerComponent, CheckboxComponent, ButtonComponent, SlideToggleComponent, SliderComponent, ButtonToggleComponent, ProgressBarComponent, ProgressSpinnerComponent, BottomSheetComponent, DeleteDialogComponent],
  imports: [AngularMaterialModule, CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, HttpClientModule
  ],
  exports: [
    AngularMaterialModule, ReactiveControlsComponent, CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, ReactiveFieldDirective, TextboxComponent, RadioComponent, TextAreaComponent, SelectComponent, DatePickerComponent, CheckboxComponent, ButtonComponent, SlideToggleComponent, SliderComponent, ProgressBarComponent, ProgressSpinnerComponent,BottomSheetComponent
  ],
  entryComponents: [
    BottomSheetComponent
  ],
  providers: [
    { provide: IGenericHttpClient, useClass: GenericHttpClientService }, 
    { provide: APP_INITIALIZER, useFactory: appSettingsFactory, deps: [AppSettingServiceService], multi: true }
  ]
})
export class FalconCoreModule { }
