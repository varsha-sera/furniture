import { Component, OnInit } from '@angular/core';
import { EmiService } from '../services/emi.service';

@Component({
  selector: 'app-useremi',
  templateUrl: './useremi.component.html',
  styleUrls: ['./useremi.component.css']
})
export class UseremiComponent implements OnInit {

  constructor(private emiService: EmiService) { }

  emis:any;
  ngOnInit(): void {
    this.emiService.allEmi().subscribe(data =>{
      this.emis=data;
    });
  }

}
