import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  constructor(private router:Router,private cartService:CartService) { }

  reject() {

    window.confirm('Are you sure to remove this item ?');
    
  }

  placeOrder(){
    this.router.navigate(['checkoutpage']);
  }

  cart:any;
  ngOnInit(): void {
    this.cartService.viewCart("624b3c7ec0f4e6780015cdcc").subscribe(data => {
      this.cart= data;
      this.cart=this.cart.productId;
      for(let i=0; i< this.cart.length; i++)
        this.cart[i].pro_qty = 1;

    localStorage.setItem("item-list",JSON.stringify(this.cart));
    });
  }
  

}
