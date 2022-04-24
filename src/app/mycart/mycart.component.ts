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

  placeOrder(){
    this.router.navigate(['checkoutpage']);
  }

  index:any;
  cart:any;
  ngOnInit(): void {
    this.cartService.viewCart(localStorage.getItem('id')).subscribe(data => {
      this.cart= data;
      this.cart=this.cart.productId;
      for(let i=0; i< this.cart.length; i++)
      {
        this.cart[i].index=i;
        this.cart[i].pro_qty = 1;
      }

    localStorage.setItem("item-list",JSON.stringify(this.cart));
    });
  }
  
  updateQuantity(quantity: any,price: any,id:any){
    let totalquantity = quantity;
    let itemList:any = localStorage.getItem("item-list");
    itemList = JSON.parse(itemList);
    console.log(itemList)
    itemList[id].pro_qty = totalquantity;
    localStorage.setItem("item-list",JSON.stringify(itemList));
    
  }

  removeCart(id:any){
    this.cartService.removeCart(id).subscribe(data => {
      window.alert("REMOVE FROM CART......");
      console.log(data);
      this.ngOnInit();
    });
  }

}
