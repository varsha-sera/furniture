import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './auth.guard';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MycartComponent } from './mycart/mycart.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path : 'aboutus',component:AboutUsComponent},
  {path:'singin',component:SigninComponent},
  {path:'singup',component:SignupComponent},
  {path : 'viewdetails/:productId',component:ViewDetailsComponent,canActivate:[AuthGuard]},
  {path : 'mycart',component : MycartComponent,canActivate:[AuthGuard]},
  { path :'checkoutpage',component:CheckoutpageComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
