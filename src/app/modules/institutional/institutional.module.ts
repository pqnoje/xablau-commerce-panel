import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionalRoutingModule } from './institutional-routing.module'
import { HomeComponent } from './home/home.component'
import { ContainersModule } from '../containers/containers.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    InstitutionalRoutingModule,
    ContainersModule
  ]
})
export class InstitutionalModule { }
