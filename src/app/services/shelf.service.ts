import { Injectable } from '@angular/core';
import { Shelf } from '../models/shelf';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShelfService {

  constructor(private http: HttpClient) {
  }

  public get() {
    return this.http.get<Array<Shelf>>(`/api/v1/shelfs`)
  }

  public create(shelf: Shelf) {
    return this.http.post(`/api/v1/shelfs`, shelf)
  }
}
