import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup , FormBuilder } from '@angular/forms';
import{
  SocialAuthService,GoogleLoginProvider,SocialUser,
} from 'angularx-social-login';
import{Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name:any;
  email:any;
  password:any;
  loginForm!:FormGroup;
  socialUser!: SocialUser;
  isLoggedin?:boolean;

  constructor(private data:UserService , private fromBuilder:FormBuilder,private socialAuthService:SocialAuthService,private router:Router) { }
  signupdata(){
    this.data.userSignUp(this.name,this.email,this.password).subscribe(data=>{
      window.alert("signup successs......");
      console.log(data);
    });
  }
  loginwithGoogle():void{
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(result=>{
      console.log(result);
      this.router.navigate(['subcategory']);
    }).catch();
  }
  ngOnInit(): void {
  }

}
