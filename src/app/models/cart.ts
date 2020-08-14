import { Product } from './product'
import { User } from './user'

export class Cart {
    public status: number
    public products: Array<Product>
    public user: User
    
    constructor(){
        this.products = new Array<Product>()
    }

    
}
