import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './auth.guard';
import { CatProductComponent } from './cat-product/cat-product.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { EmiComponent } from './emi/emi.component';
import { FavComponent } from './fav/fav.component';
import { HomeComponent } from './home/home.component';
import { MycartComponent } from './mycart/mycart.component';
import { OrderComponent } from './order/order.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { UseremiComponent } from './useremi/useremi.component';
import { UseremihostoryComponent } from './useremihostory/useremihostory.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path : 'aboutus',component:AboutUsComponent},
  {path:'contactus',component:ContactpageComponent},
  {path:'singin',component:SigninComponent},
  {path:'singup',component:SignupComponent},

  {path : 'viewdetails/:productId',component:ViewDetailsComponent,canActivate:[AuthGuard]},//guard
  {path : 'mycart',component : MycartComponent,canActivate:[AuthGuard]},//guard
  { path :'checkoutpage',component:CheckoutpageComponent,canActivate:[AuthGuard]},
  {path: 'wishlist',component: FavComponent,canActivate:[AuthGuard]},
  {path : 'subcategory',component:SubcategoryComponent},
  {path : 'emi',component:EmiComponent},
  {path : 'categories/:catId',component:CatProductComponent},
  {path : 'order',component:OrderComponent},
  {path :  'orderhistory',component:OrderhistoryComponent},
  {path : 'useremi',component:UseremiComponent},
  {path : 'emihistory',component:UseremihostoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
