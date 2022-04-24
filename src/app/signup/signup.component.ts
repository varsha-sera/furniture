import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name:any;
  email:any;
  password:any;

  constructor(private data:UserService) { }
  signupdata(){
    this.data.userSignUp(this.name,this.email,this.password).subscribe(data=>{
      window.alert("signup successs......");
      console.log(data);
    });
  }
  ngOnInit(): void {
  }

}