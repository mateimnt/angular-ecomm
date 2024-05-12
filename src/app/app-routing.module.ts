import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingsComponent } from './product-listings/product-listings.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCardComponent } from './product-card/product-card.component';

const routes: Routes = [
//   { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListingsComponent },
  { path: 'product/:id', component: ProductDetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }