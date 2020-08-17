import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShelfService } from 'src/app/services/shelf.service';
import { Shelf } from 'src/app/models/shelf';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.sass']
})
export class ShelfComponent implements OnInit {
  public form: FormGroup
  private shelf: Shelf

  constructor(
    private formBuilder: FormBuilder,
    private shelfService: ShelfService
  ){}

  ngOnInit(): void {
    this.shelf = new Shelf()
    this.initForm()
  }

  private initForm(){
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required)
    })
  }

  onSubmit(params: Object){
    this.shelf = Object.assign(this.shelf, params)
    debugger
    this.shelfService.create(this.shelf).subscribe(result => {
      debugger
    })
  }
}