import { Component, input } from '@angular/core';
import { MarketItemComponent } from '../market-item/market-item.component';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-stock-card',
  standalone: true,
  imports: [MarketItemComponent, RouterModule],
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent {
  symbol = input<string>();
  price = input<string>();
}
