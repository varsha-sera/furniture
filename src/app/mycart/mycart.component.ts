import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  constructor(private router:Router) { }

  reject() {

    window.confirm('Are you sure to remove this item ?');
    // this.router.navigate(['mycart']);
  }

  placeOrder(){
    this.router.navigate(['checkoutpage']);
  }

  ngOnInit(): void {
  }

}
