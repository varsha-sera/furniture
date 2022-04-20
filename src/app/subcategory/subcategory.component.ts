import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

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


