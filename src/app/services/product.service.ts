import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get("https://furniture-v1-app.herokuapp.com/api/product/view");
  }

  getProduct(id:any){
    console.log("ID : " + id);
    return this.http.get("https://furniture-v1-app.herokuapp.com/api/product/getproduct/"+id);
  }
}
