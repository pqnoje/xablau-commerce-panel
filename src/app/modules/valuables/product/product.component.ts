import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  @Input() productId: string;
  @Input() product: Product;

  constructor(
    private productService: ProductService,
    private cartService: CartService) { 
      this.product = new Product()
  }

  ngOnInit(): void {
    this.loadProduct()
  }

  private loadProduct(){
    debugger
    if(this.productId){
      debugger
      this.productService.get(this.productId)
      .subscribe(product => {
        debugger
        this.product = product
      })
    }
  }

  public buy(){
    this.cartService.add(this.product)
  }
}
