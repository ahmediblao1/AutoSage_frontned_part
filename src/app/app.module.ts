import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { CarsCardsComponent } from './Components/cars-cards/cars-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UploadImageComponent } from './Components/upload-image/upload-image.component';
import { SafeResourceUrlPipe } from './Pipes/SafeResourceUrl/safe-resource-url.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleCarPageComponent } from './Pages/single-car-page/single-car-page.component';
import { SuccessfullPurchasePageComponent } from './Pages/successfull-purchase-page/successfull-purchase-page.component';
import { AdminPageComponent } from './Pages/admin-pages/admin-page/admin-page.component';
import { AdminSingleCarEditPageComponent } from './Pages/admin-pages/admin-single-car-edit-page/admin-single-car-edit-page.component';
import { AdminAddNewCarPageComponent } from './Pages/admin-pages/admin-add-new-car-page/admin-add-new-car-page.component';
import { AdminManageExistingCarsPageComponent } from './Pages/admin-pages/admin-manage-existing-cars-page/admin-manage-existing-cars-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component'; 
import {JwtModule} from '@auth0/angular-jwt';
import { environment } from './Environments/myEnvironment';
import { NotAuthoarizedPageComponent } from './Pages/not-authoarized-page/not-authoarized-page.component';
import { CarsTitleComponent } from './Components/cars-title/cars-title.component';
import { SocialLoginModule, GoogleLoginProvider } from 'angularx-social-login';


export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    FooterComponent,
    CarouselComponent,
    CarsCardsComponent,
    UploadImageComponent,
    SafeResourceUrlPipe,
    SingleCarPageComponent,
    SuccessfullPurchasePageComponent,
    AdminPageComponent,
    AdminSingleCarEditPageComponent,
    AdminAddNewCarPageComponent,
    AdminManageExistingCarsPageComponent,
    LoginFormComponent,
    LoginPageComponent,
    NotAuthoarizedPageComponent,
    CarsTitleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    NgbModule,
    BrowserAnimationsModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config:{
        //adding to any request
        tokenGetter:tokenGetter,
        allowedDomains:[environment.ServerUrl],
        disallowedRoutes:[]
      }
    })
    ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('705584317099-ch8ugrkfaurq309vfrhblc8nli36desb.apps.googleusercontent.com')
          }
        ]
      }
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
