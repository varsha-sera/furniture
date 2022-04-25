import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmiService } from '../services/emi.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router,private data:UserService,private emiService: EmiService) { }

  open(){
    this.router.navigate(['mycart']);
  }
  ngOnInit(): void {
  }
  isLoggedIn():Boolean{
    if(this.data.checktoken())
      return true;

    else
    return false;
    
  }
  signout(){
    localStorage.removeItem('jwt-token');
  }

  open1(){
    console.log("hello")
    this.router.navigate(['emihistory']);
  }
}
