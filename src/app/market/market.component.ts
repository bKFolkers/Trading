import {Component, inject, OnInit, signal} from '@angular/core';
import {MarketService} from "../services/market.service";
import {Market} from "../model/market.type";

@Component({
  selector: 'app-market',
  imports: [],
  templateUrl: './market.component.html',
  styleUrl: './market.component.css'
})
export class MarketComponent implements OnInit{
  marketService = inject(MarketService);
  marketItems = signal<Array<Market>>([]);

  ngOnInit(): void {
    console.log(this.marketService.marketItems);
    this.marketItems.set(this.marketService.marketItems);
  }
}
