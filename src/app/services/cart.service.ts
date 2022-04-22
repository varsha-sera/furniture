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
    return this.http.get('https://furniture-v1-app.herokuapp.com/api/cart/view')
  }
}
