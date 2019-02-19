import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  temp = "test";
  dummy = [
    {name: "Item #1", startingBid: 1000, description: 'Item #1 description'},
    {name: "Item #2", startingBid: 2000, description: 'Item #2 description'},
    {name: "Item #3", startingBid: 3000, description: 'Item #3 description'},
    {name: "Item #4", startingBid: 4000, description: 'Item #4 description'},
    {name: "Item #5", startingBid: 5000, description: 'Item #5 description'},
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
