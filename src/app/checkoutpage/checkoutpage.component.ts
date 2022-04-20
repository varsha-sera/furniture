import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.css']
})
export class CheckoutpageComponent implements OnInit {

  constructor() { }

  orderplaced()
  {
    window.alert("Your order is placed successfully ..!!");
  }

  ngOnInit(): void {
  }

}
