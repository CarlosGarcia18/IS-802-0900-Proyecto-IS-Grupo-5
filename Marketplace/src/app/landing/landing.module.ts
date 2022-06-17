import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLandingComponent } from './view-landing/view-landing.component';



@NgModule({
  declarations: [
    ViewLandingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewLandingComponent
  ]
})
export class LandingModule { }
