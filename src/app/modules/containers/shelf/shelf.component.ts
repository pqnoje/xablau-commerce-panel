import { Component, OnInit } from '@angular/core';
import { ShelfService } from 'src/app/services/shelf.service';
import { Shelf } from 'src/app/models/shelf';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.sass']
})
export class ShelfComponent implements OnInit {

  public shelfs: Array<Shelf>
  constructor(
    private shelfService: ShelfService) {
  }

  ngOnInit(): void {
    this.getShelfs()
  }

  private getShelfs(){
    this.shelfService.getShelfs()
      .subscribe(shelfs => {
        this.shelfs = shelfs
      })
  }
}
