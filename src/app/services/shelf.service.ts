import { environment } from '../../environments/environment'

import { Injectable } from '@angular/core';
import { Shelf } from '../models/shelf';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShelfService {

  constructor(private http: HttpClient) {
  }

  public getShelfs() {
    return this.http.get<Array<Shelf>>(`/api/v1/shelfs`)
  }
}
