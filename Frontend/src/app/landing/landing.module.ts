import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './view-landing/landing.component';
import { LayoutLandingComponent } from './layout-landing/layout-landing.component';


@NgModule({
  declarations: [
    LandingComponent,
    LayoutLandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],exports:[
    LandingComponent,
    LayoutLandingComponent
  ]
})
export class LandingModule { }
