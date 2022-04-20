import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router:Router,private pro:ProductService) { }
  open(){
    this.router.navigate(['viewdetails']);
  }

  products:any=[];
   ngOnInit(): void {
    this.pro.getAllProducts().subscribe(data =>{
      this.products = data;
   });
  }

}


