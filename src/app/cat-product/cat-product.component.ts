import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cat-product',
  templateUrl: './cat-product.component.html',
  styleUrls: ['./cat-product.component.css']
})
export class CatProductComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute,private productService:ProductService) { }

  id!:any;
  products:any;
  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.paramMap.get('catId');
    this.productService.getProducts(this.id).subscribe(data=>{
      this.products=data;
    });
  }

}
