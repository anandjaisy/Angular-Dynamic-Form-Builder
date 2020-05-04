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
import { GenericHttpClient } from './service/generic-http-client';
import { appSettingsFactory, AppSettingService } from './service/appsetting.service';
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
import { AutoCompleteComponent } from './component/auto-complete/auto-complete.component';
import { authServiceFactory, AuthService } from './service/open-id/auth.service';
import { environment } from 'src/environments/environment';
import { EnvironmentViewModel } from './view-models/environment-view-model';
import { AuthCallbackComponent } from './component/auth-callback/auth-callback.component';
@NgModule({
  declarations: [ReactiveFieldDirective, TextboxComponent, ReactiveControlsComponent, RadioComponent, TextAreaComponent,
    SelectComponent, DatePickerComponent, CheckboxComponent, ButtonComponent, SlideToggleComponent, SliderComponent,
    ButtonToggleComponent, ProgressBarComponent, ProgressSpinnerComponent, BottomSheetComponent, DeleteDialogComponent, 
    AutoCompleteComponent, AuthCallbackComponent],
  imports: [AngularMaterialModule, CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, HttpClientModule
  ],
  exports: [
    AngularMaterialModule, ReactiveControlsComponent, CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule,
    ReactiveFieldDirective, TextboxComponent, RadioComponent, TextAreaComponent, SelectComponent, DatePickerComponent,
    CheckboxComponent, ButtonComponent, SlideToggleComponent, SliderComponent, ProgressBarComponent, ProgressSpinnerComponent,
    BottomSheetComponent,DeleteDialogComponent
  ],
  entryComponents: [
    BottomSheetComponent, DeleteDialogComponent
  ],
  providers: [
    { provide: EnvironmentViewModel, useValue: environment },
    { provide: IGenericHttpClient, useClass: GenericHttpClient },
    { provide: APP_INITIALIZER, useFactory: appSettingsFactory, deps: [AppSettingService], multi: true },
    { provide: APP_INITIALIZER, useFactory: authServiceFactory, deps: [AuthService,AppSettingService, EnvironmentViewModel], multi: true }
  ]
})
export class FalconCoreModule { }
