import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-adidas',
  templateUrl: './adidas.component.html',
  styleUrls: ['./adidas.component.scss']
})
export class AdidasComponent implements OnInit {
  @Input() brand?: string;
  id:string;
  constructor(private _Activatedroute:ActivatedRoute , private _router: Router,) { 
    this.brand=''
  }


  ngOnInit(): void {
    
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
  }

}
