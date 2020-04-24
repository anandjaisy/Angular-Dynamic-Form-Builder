import { NgModule } from '@angular/core';
import { ReactiveFieldDirective } from './directive/reactive-field.directive';
import { TextboxComponent } from './component/textbox/textbox.component';
import { ReactiveControlsComponent } from './component/reactive-controls/reactive-controls.component';
import { AngularMaterialModule } from './module/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReactiveFieldDirective, TextboxComponent, ReactiveControlsComponent],
  imports: [AngularMaterialModule,
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports: [AngularMaterialModule,ReactiveControlsComponent,TextboxComponent,CommonModule,FormsModule,ReactiveFormsModule]
})
export class FalconCoreModule { }
