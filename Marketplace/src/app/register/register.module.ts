import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRegisterComponent } from './view-register/view-register.component';



@NgModule({
  declarations: [
    ViewRegisterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ViewRegisterComponent
  ]
})
export class RegisterModule { }
