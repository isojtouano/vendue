import { Component, OnInit } from '@angular/core';
import { MarketService } from '../market.service';

interface itemData {
  item_id:string,
  user_id:number,
  item_name:string,
  item_description:string,
  item_price:number,
  item_category:string
}

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  temp = "test";
  private items: itemData;
  
  constructor(private market: MarketService) { }

  ngOnInit() {
    this.market.getItems().subscribe((data:itemData) => {
      this.items = data;
    });
  }

}
