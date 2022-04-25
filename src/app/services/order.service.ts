import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  allOrderHistory(){
    let userId= localStorage.getItem('id');
     return this.http.post("https://furniture-v1-app.herokuapp.com/api/order/userorderhistory",{id:userId});
   //return this.http.post("http://localhost:3000/api/order/userorderhistory",{id:userId});
  }

  allOrder(){
    let userId= localStorage.getItem('id');
     return this.http.post("https://furniture-v1-app.herokuapp.com/api/order/userordertrack",{id:userId});
   //return this.http.post("http://localhost:3000/api/order/userordertrack",{id:userId});
  }
}
