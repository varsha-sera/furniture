import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private productService:ProductService) { 
    
  }

  products!:any;
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data =>{
        this.products=data;
    });
  }

}
