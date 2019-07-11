import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

   value;

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.value = 0;
    this.cartService.getCartStream()
    .subscribe(e=>{
      this.value=e.cartQty
    })
    this.value=this.cartService.cartQty
  }
}
