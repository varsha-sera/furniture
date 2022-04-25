import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider } from 'angularx-social-login';
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
  socialAuthService: any;

  constructor(private data:UserService,private router:Router) { }
  signupdata(){
    this.data.userSignUp(this.name,this.email,this.password).subscribe(data=>{
      window.alert("signup successs......");
      console.log(data);
    });
  }
  loginwithGoogle():void{
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then((result: { id: string; name: string; })=>{
      console.log(result);
      console.log(result.id+" "+result.name);
      this.router.navigate(['subcategory']);
    }).catch();
  }
  ngOnInit(): void {
  }

}
