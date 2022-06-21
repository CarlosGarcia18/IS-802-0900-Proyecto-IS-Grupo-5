import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingModule } from './landing/landing.module';
import { RegisterModule } from './register/register.module';


const routes: Routes = [
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
