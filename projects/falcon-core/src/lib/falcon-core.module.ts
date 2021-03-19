import { NgModule, APP_INITIALIZER, ModuleWithProviders } from '@angular/core';
import { ReactiveFieldDirective } from './directive/reactive-field.directive';
import { TextboxComponent } from './component/textbox/textbox.component';
import { ReactiveControlsComponent } from './component/reactive-controls/reactive-controls.component';
import { AngularMaterialModule } from './module/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { IGenericHttpClient } from './service/http/igeneric-http-client';
import { GenericHttpClient } from './service/http/generic-http-client';
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
import { EnvironmentViewModel } from './model/environment-view-model';
import { loggerServiceFactory, LoggerService } from './service/logger.service';
import { SnackBarComponent } from './component/snack-bar/snack-bar.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { ChipsComponent } from './component/chips/chips.component';
import { TableComponent } from './component/table/table.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { EditorComponent } from './component/editor/editor.component';
@NgModule({
  declarations: [ReactiveFieldDirective, TextboxComponent, ReactiveControlsComponent, RadioComponent, TextAreaComponent,
    SelectComponent, DatePickerComponent, CheckboxComponent, ButtonComponent, SlideToggleComponent, SliderComponent,
    ButtonToggleComponent, ProgressBarComponent, ProgressSpinnerComponent, BottomSheetComponent, DeleteDialogComponent,
    AutoCompleteComponent, SnackBarComponent, ChipsComponent, TableComponent, PaginationComponent, EditorComponent],
  imports: [AngularMaterialModule, CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, HttpClientModule],
  exports: [
    AngularMaterialModule, ReactiveControlsComponent, CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule,
    ReactiveFieldDirective, TextboxComponent, RadioComponent, TextAreaComponent, SelectComponent, DatePickerComponent,
    CheckboxComponent, ButtonComponent, SlideToggleComponent, SliderComponent, ProgressBarComponent, ProgressSpinnerComponent,
    BottomSheetComponent, DeleteDialogComponent, SnackBarComponent, ChipsComponent, TableComponent,
    ButtonToggleComponent, AutoCompleteComponent, PaginationComponent,EditorComponent
  ],
  entryComponents: [
    BottomSheetComponent, DeleteDialogComponent
  ],
  providers: [
    { provide: IGenericHttpClient, useClass: GenericHttpClient },
    { provide: APP_INITIALIZER, useFactory: appSettingsFactory, deps: [AppSettingService], multi: true },
    { provide: APP_INITIALIZER, useFactory: authServiceFactory, deps: [AuthService, AppSettingService, EnvironmentViewModel], multi: true },
    { provide: APP_INITIALIZER, useFactory: loggerServiceFactory, deps: [LoggerService, AppSettingService], multi: true },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } }
  ]
})
export class FalconCoreModule {
  public static forRoot(environment: any): ModuleWithProviders<FalconCoreModule> {
    return {
      ngModule: FalconCoreModule,
      providers: [{ provide: EnvironmentViewModel, useValue: environment }]
    };
  }
}
