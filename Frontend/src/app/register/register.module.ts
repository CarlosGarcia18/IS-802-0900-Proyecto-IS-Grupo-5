import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './view-register/register.component';
import { ComponentsModule } from "../components/components.module";
//import { LayoutRegisterComponent } from './layout-register/layout-register.component';


@NgModule({
  declarations: [
    RegisterComponent
    //LayoutRegisterComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
export class AppRoutingModule{}
