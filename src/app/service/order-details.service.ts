import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }



  GlassesDetails = [
    {
      id:1,
      GlassesName:"Adidas",
      GlassesDetails:"Blue Adidas",
      GlassesPrice:200,
      GlassesImg:""},
    {
      id:2,
      GlassesName:"Veggie Supreme",
      GlassesDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      GlassesPrice:369,
      GlassesImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      GlassesName:"Paneer Burger",
      GlassesDetails:"panner",
      GlassesPrice:149,
      GlassesImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      GlassesName:"Veg Masala Roll In Naan",
      GlassesDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      GlassesPrice:140,
      GlassesImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      GlassesName:"Indulgence Brownie",
      GlassesDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      GlassesPrice:105,
      GlassesImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      GlassesName:"Oreo Cheesecake Ice Cream",
      GlassesDetails:"Oreo ice cream",
      GlassesPrice:219,
      GlassesImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]

}
