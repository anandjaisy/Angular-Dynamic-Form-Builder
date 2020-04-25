import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ReactiveFieldDirective } from './directive/reactive-field.directive';
import { TextboxComponent } from './component/textbox/textbox.component';
import { ReactiveControlsComponent } from './component/reactive-controls/reactive-controls.component';
import { AngularMaterialModule } from './module/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { IGenericHttpClient } from './service/igeneric-http-client';
import { GenericHttpClientService } from './service/generic-http-client.service';
import { appSettingsFactory, AppSettingServiceService } from './service/app-setting-service.service';

@NgModule({
  declarations: [ReactiveFieldDirective, TextboxComponent, ReactiveControlsComponent],
  imports: [AngularMaterialModule,CommonModule,FormsModule,ReactiveFormsModule,FlexLayoutModule,HttpClientModule
  ],
  exports: [AngularMaterialModule,ReactiveControlsComponent,TextboxComponent,CommonModule,FormsModule,ReactiveFormsModule,FlexLayoutModule],
  providers: [
    { provide: IGenericHttpClient, useClass: GenericHttpClientService },{ provide: APP_INITIALIZER, useFactory: appSettingsFactory, deps: [AppSettingServiceService], multi: true },
  ]
})
export class FalconCoreModule { }
