import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutLandingComponent } from './layout-landing/layout-landing.component';
import { LandingComponent } from "./view-landing/landing.component";


const routes: Routes = [
  { 
    path: '', 
    component: LayoutLandingComponent,
    children:[
      {
        path:"plazitanet",
        component:LandingComponent
      },
      {
        path:"plazitanet/register",
        loadChildren: () => import('../register/register.module').then(m => m.RegisterModule)
      },
      {
        path:"plazitanet/register/termsAndConditions",
        loadChildren: () => import('../terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule)
      },
      {
        path:"plazitanet/login",
        loadChildren: () => import('../login/login.module').then(m => m.LoginModule)
      },
      {
        path:"plazitanet/termsAndConditions",
        loadChildren: () => import('../terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule)
      },
      {
        path:"plazitanet/login/credential",
        loadChildren: () => import('../credential-recovery/credential-recovery.module').then(m => m.CredentialRecoveryModule)
      },
      {
        path: "",
        redirectTo: "plazitanet",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
