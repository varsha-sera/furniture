import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  addCart(pid:any,uid:any){
    return this.http.post('https://furniture-v1-app.herokuapp.com/api/cart/add',{uId:uid,pId:pid});
  }

  viewCart(is:any) {
    let userId=localStorage.getItem('id');
    return this.http.post('https://furniture-v1-app.herokuapp.com/api/cart/view',{uId:userId});
    //return this.http.post('http://localhost:3000/api/cart/view',{uId:userId});
  }

  removeCart(id:any) {
    let userId=localStorage.getItem('id');
    return this.http.post('https://furniture-v1-app.herokuapp.com/api/cart/remove',{uId:userId,pId:id});
    //return this.http.post('http://localhost:3000/api/cart/remove',{uId:userId,pId:id});
  }
}
