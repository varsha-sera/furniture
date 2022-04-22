import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private router:Router,private activateRoute:ActivatedRoute,private pro:ProductService,private cartService:CartService) { }


  id!:any;
  product!:any;
  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.paramMap.get('productId');
    this.pro.getProduct(this.id).subscribe(data=>{
      this.product=data;
    });

  }

  addCart(pro_id:any,user_id:any){
    this.cartService.addCart(pro_id,user_id).subscribe(data=>{
      window.alert("Added To Cart...");
    });
  }

  addWhishlist(pro_id:any,user_id:any){}

}
