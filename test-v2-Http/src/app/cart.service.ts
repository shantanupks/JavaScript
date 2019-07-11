import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = {}
  cartQty = 0;

  cartStream:Subject<any> = new Subject()

  getCartStream(){
    return this.cartStream
  }

  getCart(){
    return this.cart
  }

  addToCart(item,qty) {

    console.log("addToCart()-->"+item.id)
    console.log("Cart()-->"+this.cart[item.id])

    let { id } = item;
    let itemLine = this.cart[id];
    if (itemLine) {
      itemLine = { item, qty: itemLine.qty + qty }
    } else {
      itemLine = { item, qty: 1 }
    }
    this.cart = { ...this.cart, [id]: itemLine }
    if (itemLine.qty === 0)
    delete this.cart[id]
    
    this.publishToStream()

    console.log("cart[item.id].qty()-->"+this.cart[item.id].qty)
  }

  publishToStream(){
    this.cartQty = Object.keys(this.cart).length;
    this.cartStream.next({ cartQty: this.cartQty, cart: this.cart })
  }
}
