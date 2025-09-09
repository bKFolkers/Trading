import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketService } from "../services/market.service";
import { catchError, of } from "rxjs";
import {CounterComponent} from "../components/counter/counter.component";
import {Market} from "../model/market.type";
import {MarketItemComponent} from "../components/market-item/market-item.component";
import {PortfolioService} from "../services/portfolio.service";

@Component({
    selector: 'app-market',
    standalone: true,
    imports: [CommonModule, MarketItemComponent, CounterComponent],
    templateUrl: './market.component.html',
    styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
    marketService = inject(MarketService);
    stocks = signal<Market>({});
    portfolioService = inject(PortfolioService);

    ngOnInit(): void {
        this.marketService.getMarketFromApi()
            .pipe(
                catchError(err => {
                    console.error(err);
                    return of({});
                })
            )
            .subscribe(res => {
                this.stocks.set(res);
            });
    }

    onToggle(symbol: string, price: string) {
        this.portfolioService.toggleStock({ symbol, price });
    }


    get symbols(): string[] {
        return Object.keys(this.stocks());
    }
}
