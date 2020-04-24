import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestReactiveControlsComponent } from './component/test-reactive-controls/test-reactive-controls.component';
import { FalconCoreModule } from 'projects/falcon-core/src/public-api';


@NgModule({
  declarations: [
    AppComponent,
    TestReactiveControlsComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FalconCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
