import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

  constructor() { }
  reject() {

    window.confirm('Are you sure to remove this item ?');

  }

  ngOnInit(): void {
  }

}
