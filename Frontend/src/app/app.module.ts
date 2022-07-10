import { NgModule } from '@angular/core';

import { CargarScriptsService} from "./cargar-scripts.service";
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CredentialRecoveryModule } from './credential-recovery/credential-recovery.module';
//import { LoginModule } from './login/login.module';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
//import { RecoveryLayoutComponent } from './layouts/recovery-layout/recovery-layout.component';
import { NavigationLayoutComponent } from './layouts/navigation-layout/navigation-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    //RecoveryLayoutComponent,
    NavigationLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //LandingModule,
    //RegisterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CredentialRecoveryModule,
    MatPaginatorModule,
    BrowserAnimationsModule
    //TermsAndConditionsModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
