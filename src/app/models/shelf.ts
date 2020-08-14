import { Product } from './product'

export class Shelf {
    public products: Array<Product>
    public category: number

    constructor(){
        this.products = new Array<Product>()
    }
}
