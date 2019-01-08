import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'menu-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  isShow = false;

  constructor() { }

  showCart() {
    this.isShow = true;
  }

  leave() {
    this.isShow = false;
  }
}
