import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  @Input("cart") cart;
  @Input("display") display;
  @Output() remove = new EventEmitter()
  cartItems = []

  removeItem(event, id) {
    let { item } = this.cart[id]
    if (this.cart[item.id].qty > 1) {
      this.cart[item.id].qty--;
    }
  }

  addItem(event, id) {
    let { item } = this.cart[id]
      this.cart[item.id].qty++;
  }


  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.cartItems = []
    let keys = Object.keys(this.cart);
    keys.forEach(key => this.cartItems.push(this.cart[key].item))
  }

}
