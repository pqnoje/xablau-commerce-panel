import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: Cart

  constructor() {
    this.cart = new Cart()
  }

  add(product: Product) {
    product.amount--
    this.cart.products.push(product)
  }

  remove(product) {
    product.amount++
    for (let i = 0; i < this.cart.products.length; i++) {
      if (this.cart.products[i]._id === product._id) {
        this.cart.products.splice(i, 1)
        break
      }
    }
  }

  getProducts() {
    return this.cart.products
  }
}
