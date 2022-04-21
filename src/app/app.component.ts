import { Component } from '@angular/core';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'furnitureapp';
  constructor(private data:UserService){

  }
  isLoggedIn():Boolean{
    if(this.data.checktoken())
      return true;

    else
    return false;
    
  }
}
