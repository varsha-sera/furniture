import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email:any;
  password:any;
  constructor(private data:UserService,private router:Router) { }
  signindata(){
    this.data.userSignIn(this.email,this.password).subscribe(data1=>{
        if(data1){
          console.log(data1);
          alert('SignIn Success');
          localStorage.setItem('jwt-token',data1.token);
          localStorage.setItem('id',data1.result._id);
          console.log(data1.result._id);
          this.router.navigate(['/subcategory']);

        }
        else{
          alert('Invalid User');
        }
    });
  }
  ngOnInit(): void {
  }

}
