import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShelfComponent } from './shelf/shelf.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'shelf', component: ShelfComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainersRoutingModule { }
