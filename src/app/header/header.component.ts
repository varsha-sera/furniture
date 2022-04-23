import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router,private data:UserService) { }

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
    this.router.navigate(['']);
  }

}
