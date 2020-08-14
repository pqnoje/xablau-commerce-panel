import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  public cart: Cart
  public products: Array<Product>
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
      this.products = this.cartService.getProducts()
  }
  
  add(product: Product){
    this.cartService.add(product)
  }

  remove(product: Product){
    this.cartService.remove(product)
  }

  checkout() {
    //check login
    //after login: save cart and checkout for logged user
    //if is new user, just need username and password
    //ask for address and personal info when user inputs choose payment method
    //MAKE THIS METHOD AS SIMPLEST POSSIBLE PLEASE
  }
}
