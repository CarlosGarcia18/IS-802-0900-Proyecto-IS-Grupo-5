import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './view-login/login.component';
import { ComponentsModule } from "../components/components.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ComponentsModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
