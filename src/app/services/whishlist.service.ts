import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('https://furniture-v1-app.herokuapp.com/api/favourite/view');
  }

  addProduct(id:any){
    let userid=localStorage.getItem('id');
    return this.http.post('https://furniture-v1-app.herokuapp.com/api/favourite/add',{uId:userid,pId:id})
  }
}
