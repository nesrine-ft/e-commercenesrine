import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule , ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbareComponent } from './components/navbare/navbare.component';
import { HomeComponent } from './components/home/home.component';
import { BrandsComponent } from './components/Brands/Brands.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenupageComponent } from './components/menupage/menupage.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';

import { AdidasComponent } from './components/adidas/adidas.component';
import { AlaiaComponent } from './components/alaia/alaia.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbareComponent,
    HomeComponent,
    BrandsComponent,
    AboutComponent,
    ContactComponent,
    MenupageComponent,
   
    LoginComponent,
    CartComponent,
   
    AdidasComponent,
    AlaiaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
