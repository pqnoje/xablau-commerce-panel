import { Product } from './product'

export class Shelf {
    public products: Array<Product>
    public name: number

    constructor(){
        this.products = new Array<Product>()
    }
}
