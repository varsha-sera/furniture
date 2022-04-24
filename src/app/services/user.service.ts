import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userApiUrl1="https://furniture-v1-app.herokuapp.com/api/user/view";
  userApiUrl2="https://furniture-v1-app.herokuapp.com/api/user/signup";
  userApiUrl3="https://furniture-v1-app.herokuapp.com/api/user/signin";
  onlineApi="https://furniture-v1-app.herokuapp.com/api/order/online";

  constructor(private _http:HttpClient) { }
  userView(){
    return this._http.get<any>(this.userApiUrl1);
  }
  userSignUp(name:any,email:any,password:any){
    return this._http.post<any>(this.userApiUrl2,{uname:name,uemail:email,upassword:password});
  }
  userSignIn(email:any,password:any){
    return this._http.post<any>(this.userApiUrl3,{email:email,password:password});
  }
  checktoken():boolean{
    return !!localStorage.getItem('jwt-token');
  }

  createOrder(amt:any){

    return this._http.post<any>(this.onlineApi,{amt})

  }

}