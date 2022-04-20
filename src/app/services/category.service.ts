import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAllcategories(){
    return this.http.get('https://furniture-v1-app.herokuapp.com/api/category/view');
  }
}
