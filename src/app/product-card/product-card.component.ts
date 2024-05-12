import { Component, Input } from '@angular/core';
import { Product } from '../product.model'; // Import the Product model

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: Product;

  constructor() {
    this.product = {} as Product;
  }
}
