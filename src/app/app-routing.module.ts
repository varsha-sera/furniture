import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './auth.guard';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { FavComponent } from './fav/fav.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MycartComponent } from './mycart/mycart.component';
import { SearchComponent } from './search/search.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path : 'aboutus',component:AboutUsComponent},
  {path:'contactus',component:ContactpageComponent},
  {path:'singin',component:SigninComponent},
  {path:'singup',component:SignupComponent},
<<<<<<< HEAD
  {path : 'viewdetails/:productId',component:ViewDetailsComponent},
  {path : 'mycart',component : MycartComponent},
  {path: 'wishlist',component: FavComponent},
  {path:'search',component:SearchComponent},
  { path :'checkoutpage',component:CheckoutpageComponent},
=======
  {path : 'viewdetails/:productId',component:ViewDetailsComponent,canActivate:[AuthGuard]},//guard
  {path : 'mycart',component : MycartComponent,canActivate:[AuthGuard]},//guard
  { path :'checkoutpage',component:CheckoutpageComponent,canActivate:[AuthGuard]},
  {path: 'wishlist',component: FavComponent,canActivate:[AuthGuard]},
>>>>>>> 82b9fa79262b856ea43b71e2659bcd200b774640
  {path : 'subcategory',component:SubcategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
