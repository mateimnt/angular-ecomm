import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private products: Product[] = [
        {
            id: 1,
            name: 'T-Shirt',
            description: 'A comfortable and stylish T-Shirt',
            price: 25.99,
            imageUrl: 'assets/images/product1.jpg'
        },
        {
            id: 2,
            name: 'Sweatshirt',
            description: 'A warm and cozy sweatshirt',
            price: 49.99,
            imageUrl: 'assets/images/product2.jpg'
        },
    ];

    getProducts(): Product[] {
        return this.products.slice();
    }

    getProduct(id: number): Product | null {
        return this.products.find(product => product.id === id) || null;
    }

    constructor() { }
}
