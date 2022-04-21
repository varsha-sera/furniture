import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private data:UserService,private route:Router){}
  canActivate(){
    if(this.data.checktoken()){
      return true;
    }
    else{
      this.route.navigate(['signup']);
      return false;
    }
  }
  
}