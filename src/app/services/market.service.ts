import { Injectable } from '@angular/core';
import {Market} from "../model/market.type";

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  marketItems: Array<Market> = [
      {
          userId: 1,
          title: 'Dow Jones Industrial Average (DJIA)',
          id: 0,
          added: false,
      },
      {
          userId: 1,
          title: 'Invesco S&P 500® Top 50 ETF (Fund)',
          id: 1,
          added: false,
      },
  ]
  constructor() { }
}
