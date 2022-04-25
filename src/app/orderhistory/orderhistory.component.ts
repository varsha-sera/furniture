import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {

  constructor(private ordersService: OrderService) { }

  data:any;

  orders:any;
  ngOnInit(): void {
    this.ordersService.allOrderHistory().subscribe(data => {
      this.orders=data;
    });
  }

}
