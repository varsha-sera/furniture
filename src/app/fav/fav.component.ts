import { Component, OnInit } from '@angular/core';
import { WhishlistService } from '../services/whishlist.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

  constructor(private whishlistService:WhishlistService) { }
  reject() {

    window.confirm('Are you sure to remove this item ?');

  }

  products:any;
  ngOnInit(): void {
    this.whishlistService.getProducts().subscribe(data => {
      this.products=data;
    });
  }

}
