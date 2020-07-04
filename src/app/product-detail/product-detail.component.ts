import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceProductItem } from './authentication.ServiceProductItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public productItem = {}

  public productname = localStorage.getItem('productName')
  
  constructor(
    private authenticationServiceProductItem: AuthenticationServiceProductItem,
    private router: Router
  ) { }

  getProduct = () => {
    this.authenticationServiceProductItem.showProduct(this.productname).subscribe(
      (data) => {
        if (data != null && data.name) {
          this.productItem = data
        } else {
          return window.alert('error')
        }
      },
      (err) => console.error(err))
  }

  ngOnInit() {
    this.getProduct()
  }

}
