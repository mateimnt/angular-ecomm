import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListingsComponent } from './product-listings/product-listings.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';


// const routes: Routes = [
//   { path: '', redirectTo: '/products', pathMatch: 'full' },
//   { path: 'products', component: ProductListingsComponent },
//   { path: 'product/:id', component: ProductDetailComponent }
// ];

@NgModule({
  imports: [
    BrowserModule, FormsModule, RouterModule, AppRoutingModule
    // RouterModule.forRoot(routes, { enableTracing: true }) 
  ],
  declarations: [
    AppComponent, ProductListingsComponent, ProductDetailComponent, NavbarComponent, ProductCardComponent, CartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}