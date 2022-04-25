import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmiService } from '../services/emi.service';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {

  constructor(private emiService:EmiService,private router:Router) { }

  totalPrice:any=0;
  cartItem:any=localStorage.getItem('item-list');
  ngOnInit(): void {
    let list=JSON.parse(this.cartItem);
    console.log(list);
    for(let item of list){
      this.totalPrice=(item.pPrice)*(item.pro_qty)+(this.totalPrice);
    }
  }

  submit(intrest:any,downpayment:any){
    let userId=localStorage.getItem('userId')
    this.emiService.addEmi(intrest,downpayment,this.totalPrice).subscribe(data =>{
      window.alert("Emi Success...");
      this.router.navigate(['checkoutpage']);
    });
  }

}
