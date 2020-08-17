import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  get(id: string) {
    return this.http.get<Product>(`/api/v1/products/${id}`)
  }

  create(product: Product) {
    return this.http.post('/api/v1/products', product)
  }
}
