import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationProductsComponent } from './view-navigation/navigation-products.component';

const routes: Routes = [{ path: '', component: NavigationProductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationProductsRoutingModule { }
