import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  cart;
  cartItems = []

  constructor(private cartService: CartService, private itemService: ItemService) { }

  incOrDec1(item,qty){
    this.cartService.addToCart(item,qty)
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartItems = []

    let keys = Object.keys(this.cart);
    keys.forEach(key => this.cartItems.push(this.cart[key].item))

    this.cartService.getCartStream()
      .subscribe(e => {
        this.cart = e.cart
        this.cartItems = []
        let keys = Object.keys(this.cart);
        keys.forEach(key => this.cartItems.push(this.cart[key].item))
      })
  }

  incOrDec(item,qty){
    this.cartService.addToCart(item,qty);
  }

}
