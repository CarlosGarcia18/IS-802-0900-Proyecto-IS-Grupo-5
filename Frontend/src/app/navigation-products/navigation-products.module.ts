import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationProductsRoutingModule } from './navigation-products-routing.module';
import { NavigationProductsComponent } from './view-navigation/navigation-products.component';


@NgModule({
  declarations: [
    NavigationProductsComponent
  ],
  imports: [
    CommonModule,
    NavigationProductsRoutingModule
  ],
  exports:[
    NavigationProductsComponent
  ]
})
export class NavigationProductsModule { }
