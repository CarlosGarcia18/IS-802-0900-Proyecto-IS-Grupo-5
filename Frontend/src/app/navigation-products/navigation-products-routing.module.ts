import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationProductsComponent } from './view-navigation/navigation-products.component';
import { ProductsComponent } from "./products/products.component";
import { WishListComponent } from "./wish-list/wish-list.component";
import { PublishedProductsComponent } from "./published-products/published-products.component";
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

const routes: Routes = [
  { 
    path: '', 
    component: NavigationProductsComponent, 
    children:[
      {path: '',component:ProductsComponent},
      {path: 'wishlist',component:WishListComponent},
      {path: 'published',component:PublishedProductsComponent},
      {path: 'subscriptions',component:SubscriptionsComponent}
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationProductsRoutingModule { }
