import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Area } from '../models/area'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TelzirService {

  constructor(private http: HttpClient) { }

  public listProducts(): Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`/api/v1/marketplace/telzir/promotions`)
  }

  public listAreas(): Observable<Array<Area>> {
    return this.http.get<Array<Area>>(`/api/v1/marketplace/telzir/areas`)
  }

  public simulatePrice(params): Observable<boolean> {
    return this.http.post<boolean>(`/api/v1/marketplace/telzir/promotions/calc`, params)
  }
}
