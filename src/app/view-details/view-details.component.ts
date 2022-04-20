import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private router:Router,private activateRoute:ActivatedRoute,private pro:ProductService) { }


  id!:any;
  product!:any;
  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.paramMap.get('productId');
    this.pro.getProduct(this.id).subscribe(data=>{
      this.product=data;
    });

  }

}
