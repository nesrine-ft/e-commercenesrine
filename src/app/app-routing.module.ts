import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BrandsComponent } from './components/Brands/Brands.component';
import { MenupageComponent } from './components/menupage/menupage.component';
import { AdidasComponent } from './components/adidas/adidas.component';
import { AlaiaComponent } from './components/alaia/alaia.component';

const routes: Routes = [

{path:'',component:HomeComponent},
{path:'Brands',component:BrandsComponent},
{path:'menu/:id',component:MenupageComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'log',component:LoginComponent},
{path:'cart',component:CartComponent},
{path:'brand/:id',component:AdidasComponent},
{path:'alaia',component:AlaiaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
