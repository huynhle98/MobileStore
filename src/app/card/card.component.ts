import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public cart = JSON.parse(localStorage.getItem("cart"))
  public totalPrice = 0
  constructor() { }

  handleRemoveProduct = (productName) => {
    this.cart.forEach(element => {
      if(element["name"] === productName) {
        console.log("AAAAAAAAa")
        // console.log(element.indexOf(productName))
        // this.cart.splice(this.cart.indexOf(productName), 1);
      }
    });
  }

  ngOnInit() {
    for(let i = 0; i < this.cart.length; i++) {
      this.totalPrice += this.cart[i]["price"]
    }
  }

}
