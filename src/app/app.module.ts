import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaincontainComponent } from './maincontain/maincontain.component';
import { BannerComponent } from './banner/banner.component';
import { CategoryComponent } from './category/category.component';
import { StoryComponent } from './story/story.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { MycartComponent } from './mycart/mycart.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { HttpClientModule } from '@angular/common/http';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { FavComponent } from './fav/fav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaincontainComponent,
    BannerComponent,
    CategoryComponent,
    StoryComponent,
    FooterComponent,
    AboutUsComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    ViewDetailsComponent,
    MycartComponent,
    CheckoutpageComponent,
    SubcategoryComponent,
    FavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
