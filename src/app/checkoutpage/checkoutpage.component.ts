import { Component, OnInit } from '@angular/core';
import { EmiService } from '../services/emi.service';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.css']
})
export class CheckoutpageComponent implements OnInit {

  constructor(private emiService:EmiService) { }

  orderplaced(mobile:any,address:any,email:any,quantity:any,amount:any,emi:any)
  {
    this.emiService.placeOrder(mobile,address,email,quantity,amount,emi,this.productId).subscribe(data => {
      window.alert("Order Placed")
    })
  }

  cartItem:any=localStorage.getItem('item-list');
  totalProducts!:number;
  totalPrice:number=0;
  productId:any=[];
  i=0;
  k=0;
  ngOnInit(): void {
    this.cartItem=JSON.parse(this.cartItem);
    for(let item of this.cartItem){
      this.totalProducts=++this.i;
      this.totalPrice=(item.pPrice)*(item.pro_qty)+(this.totalPrice);
      this.productId[this.k++]=item._id;
    }
    console.log(this.totalPrice)
  }

}
