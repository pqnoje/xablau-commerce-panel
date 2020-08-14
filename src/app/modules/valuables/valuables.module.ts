import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValuablesRoutingModule } from './valuables-routing.module';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ValuablesRoutingModule
  ],
  exports: [ProductComponent]
})
export class ValuablesModule { }
