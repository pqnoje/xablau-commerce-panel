import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from './cart.service';
import { Cart } from '../models/cart';
import { User } from '../models/user';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User

  constructor(
    private http: HttpClient,
    private cartService: CartService
    ) {}

  public login(params: Object){
    return this.http.post('/api/v1/users/auth', params)
  }

  public getUser(){
    return this.user
  }
}
