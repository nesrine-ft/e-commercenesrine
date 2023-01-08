import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/service/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  glassesData:any;
  ngOnInit(): void {
    this.glassesData = this.service.GlassesDetails;
  }

}
