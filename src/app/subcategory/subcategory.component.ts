import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  constructor(private router:Router,private cat:CategoryService) { }
  open(){
    this.router.navigate(['viewdetails']);
  }

  categories:any=[];
   ngOnInit(): void {
    this.cat.getAllcategories().subscribe(data =>{
      this.categories = data;
   });
  }

}


