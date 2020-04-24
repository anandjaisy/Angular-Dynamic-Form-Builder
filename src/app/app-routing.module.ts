import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestReactiveControlsComponent } from './component/test-reactive-controls/test-reactive-controls.component';


const routes: Routes = [
  {
    path: '', component: TestReactiveControlsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
