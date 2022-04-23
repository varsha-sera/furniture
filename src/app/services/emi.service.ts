import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmiService {

  constructor(private http:HttpClient) { }

  addEmi(intrest:any,downpayment:any,totalPrice:any){
    let userId=localStorage.getItem('userId');
    return this.http.post("https://furniture-v1-app.herokuapp.com/api/emi/emientry",{emiTotal:totalPrice,emiIntrest:intrest,emiDownPayment:downpayment,products:"62629035d3089a54b136bc60",userId:userId});
  }

  placeOrder(mobile:any,address:any,email:any,quantity: any,amount:any,emi:any,productid:any){
    let userId=localStorage.getItem('userId');
    return this.http.post("https://furniture-v1-app.herokuapp.com/api/order/order",{userId:userId,mobileNo:mobile,shippingAddress:address,orderQuantity:quantity,totalAmount:amount,orderPayment:emi,productId:productid});
  }
}
