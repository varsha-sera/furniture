import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';

import { GoogleLoginProvider } from 'angularx-social-login';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { MycartComponent } from './mycart/mycart.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { HttpClientModule } from '@angular/common/http';
import { UserViewComponent } from './user-view/user-view.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { FavComponent } from './fav/fav.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { SearchComponent } from './search/search.component';
import { from } from 'rxjs';



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
    UserViewComponent,
    SubcategoryComponent,
    FavComponent,
    ContactpageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('570476200199-tbdjic3o1i0fjs86pjnul8mi3tgnc3s9.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
