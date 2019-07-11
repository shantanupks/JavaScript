import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input("value") item;
  @Input("cartQty") cartQty;
  @Output() buy = new EventEmitter();
  reviews:Array<any> = []

  currentTab = 1

  constructor(private cartService:CartService,private itemService:ItemService){ }


  ngOnInit() {
    
  }

  handleBuy(event) {
    console.log("buy button clicked")
    this.cartService.addToCart(this.item,1);
  }

  isTabSelected(tabIndex) {
    return this.currentTab === tabIndex;
  }
  changeTab(event, tabIndex) {
    event.preventDefault();
    this.currentTab = tabIndex;
    if(this.currentTab===3){
      this.itemService.getReviews(this.item.id)
      .subscribe((response:any)=>{
        this.reviews=response
      })
    }
  }

}
