import {Component, inject, OnInit, signal} from '@angular/core';
import {GreetingComponent} from "../components/greeting/greeting.component";
import {StockCardComponent} from "../components/stock-card/stock-card.component";
import {CommonModule} from "@angular/common";
import {MarketService} from "../services/market.service";
import {Market} from "../model/market.type";
import {catchError, of} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, StockCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  homeTitle = signal("🐂 Welcome to Loss Vegas 🐻");
  homeSubTitle = signal("Trade smarter, not harder")
  homeIntroduction = signal("Follow real stock prices, track your portfolio," +
      " and test your trading skills in a risk-free environment!")

  marketService = inject(MarketService);
  stocks = signal<Market>({});

  ngOnInit(): void {
    this.marketService.getMarketFromApi()
        .pipe(catchError(err => {
          console.error(err);
          return of({} as Market);
        }))
        .subscribe(res => this.stocks.set(res));
  }

  get symbols(): string[] {
    return Object.keys(this.stocks());
  }
}