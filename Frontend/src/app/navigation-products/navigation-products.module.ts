import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationProductsRoutingModule } from './navigation-products-routing.module';
import { NavigationProductsComponent } from './view-navigation/navigation-products.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { PublishedProductsComponent } from './published-products/published-products.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ProductsComponent } from './products/products.component';
import { ComponentsModule } from "../components/components.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatPaginatorModule} from "@angular/material/paginator"

import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    NavigationProductsComponent,
    NewProductsComponent,
    PublishedProductsComponent,
    WishListComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    NavigationProductsRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    
    MatPaginatorModule
  ],
  exports:[
    NavigationProductsComponent
  ]
})
export class NavigationProductsModule { }
