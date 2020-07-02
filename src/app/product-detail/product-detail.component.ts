import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  items: {[key: string]: string} = { 'Item Code': '123456', 'Manufaturer': 'Apple', 'Category': 'Apple', 'Available units in stock': '800'};
  keepOrder = (a, b) => {
    return a;
  };
  constructor() { }

  ngOnInit() {
  }

}
