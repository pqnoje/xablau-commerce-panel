import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelzirRoutingModule } from './telzir-routing.module';
import { ProductComponent } from './product/product.component';

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    TelzirRoutingModule,
    ReactiveFormsModule
  ],
  exports: [ProductComponent]
})
export class TelzirModule { }
