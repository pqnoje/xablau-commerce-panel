import { Component, OnInit, Input } from '@angular/core';
import { TelzirService } from 'src/app/services/telzir.service';
import { Product } from 'src/app/models/product';
import { Area } from 'src/app/models/area'

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'telzir-app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  public products: Array<Product>
  public form: FormGroup 
  public areas: Array<Area>
  public calcResults: Array<any>
  
  constructor(
    private formBuilder: FormBuilder,
    private telzirService: TelzirService){

    this.products = new Array<Product>()
    this.areas = new Array<Area>()
    this.calcResults = new Array<any>()
  }

  ngOnInit(){
    this.getProducts()
    this.getAreas()
    this.buildForm()
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      originArea: new FormControl('', Validators.required),
      distArea: new FormControl('', Validators.required),
      promotion: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required)
    })
  }

  private getProducts(){
    this.telzirService.listProducts()
      .subscribe(products => this.products = products)
  }

  private getAreas() {
    this.telzirService.listAreas()
      .subscribe(areas => this.areas = areas)
  }

  public onSubmit(form: Object){
    this.telzirService.simulatePrice(form).subscribe(result => {
      this.calcResults.push(result)
    })
  }
}