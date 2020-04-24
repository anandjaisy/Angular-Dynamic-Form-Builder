import { NgModule } from '@angular/core';
import { ReactiveFieldDirective } from './directive/reactive-field.directive';
import { TextboxComponent } from './component/textbox/textbox.component';
import { ReactiveControlsComponent } from './component/reactive-controls/reactive-controls.component';
import { AngularMaterialModule } from './module/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [ReactiveFieldDirective, TextboxComponent, ReactiveControlsComponent],
  imports: [AngularMaterialModule,CommonModule,FormsModule,ReactiveFormsModule,FlexLayoutModule
  ],
  exports: [AngularMaterialModule,ReactiveControlsComponent,TextboxComponent,CommonModule,FormsModule,ReactiveFormsModule,FlexLayoutModule]
})
export class FalconCoreModule { }
