import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/service/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './Brands.component.html',
  styleUrls: ['./Brands.component.scss']
})
export class BrandsComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  glassesData:any;
  ngOnInit(): void {
    this.glassesData=this.service.GlassesDetails;
  }
brands=[{"name":"adidas","id":1}]
brand=""
}
