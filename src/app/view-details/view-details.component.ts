import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { WhishlistService } from '../services/whishlist.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private router:Router,private activateRoute:ActivatedRoute,private pro:ProductService,private cartService:CartService,private whishlist:WhishlistService) { }


  id!:any;
  product!:any;
  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.paramMap.get('productId');
    this.pro.getProduct(this.id).subscribe(data=>{
      this.product=data;
    });

  }

  f:boolean = true;
  addCart(pro_id:any){
    let user_id=localStorage.getItem('id');
    let pro:any=localStorage.getItem('item-list');
    pro = JSON.parse(pro);

    for(let p of pro){
      if(p._id==pro_id){
        window.alert("already added");
        this.f=false;
        break;
      }
    }

    if(this.f)
    {
        this.cartService.addCart(pro_id,user_id).subscribe(data=>{
          window.alert("Added To Cart...");
        });
    }
  }

  

  addWhishlist(pro_id:any){
    this.whishlist.addProduct(pro_id).subscribe(data =>{
      window.alert("Added To Whishlist");  
    });
  }

}
