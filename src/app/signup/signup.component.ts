import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup ,Validator } from '@angular/forms';
import { from } from 'rxjs';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser
}from 'angularx-social-login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginForm! : FormGroup;
  socialUser!:SocialUser;
  isLoggedin?:boolean;

  constructor(
    private formBuilder:FormBuilder,
    private socailAuthService:SocialAuthService
  ) { }

  ngOnInit(): void {
  }
  loginWithGoogle():void{
    this.socailAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(result =>{
      console.log(result);
    }).catch();
  }
  logOut():void{
    this.socailAuthService.signOut();
  }

}
