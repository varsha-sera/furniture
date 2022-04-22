import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  userData:any;
  constructor(private data:UserService) { 
    this.data.userView().subscribe(data1=>{
      this.userData=data1;
    });
  }

  ngOnInit(): void {
  }

}
