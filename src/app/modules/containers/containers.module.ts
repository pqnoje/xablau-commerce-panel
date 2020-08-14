import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersRoutingModule } from './containers-routing.module';
import { ShelfComponent } from './shelf/shelf.component';
import { CartComponent } from './cart/cart.component';
import { WalletComponent } from './wallet/wallet.component';
import { ValuablesModule } from '../valuables/valuables.module';


@NgModule({
  declarations: [
    ShelfComponent,
    CartComponent,
    WalletComponent
  ],
  imports: [
    CommonModule,
    ContainersRoutingModule,
    ValuablesModule
  ],
  exports: [
    ShelfComponent,
    CartComponent
  ]
})
export class ContainersModule { }
