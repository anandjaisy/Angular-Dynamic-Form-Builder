import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestReactiveControlsComponent } from './component/test-reactive-controls/test-reactive-controls.component';
import { FalconCoreModule } from 'projects/falcon-core/src/public-api';
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
import {HighlightModule,HIGHLIGHT_OPTIONS,HighlightOptions} from "ngx-highlightjs";
import { InputFloatingLabelComponent } from './component/input/input-floating-label/input-floating-label.component';
import { CodeButtonComponent } from './common/component/code-button/code-button.component';
import { InputHintComponent } from './component/input/input-hint/input-hint.component';
import { InputErrorComponent } from './component/input/input-error/input-error.component';
import { InputPrefixSuffixComponent } from './component/input/input-prefix-suffix/input-prefix-suffix.component';
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
    InputPrefixSuffixComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FalconCoreModule,
    HighlightModule
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: <HighlightOptions>{
      lineNumbers: true
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
