import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketService } from "../services/market.service";
import { catchError, of } from "rxjs";
import {CounterComponent} from "../components/counter/counter.component";
import {MarketItemComponent} from "../components/market-item/market-item.component";
import {PortfolioService} from "../services/portfolio.service";


export interface MarketStock {
    symbol: string;
    price: string;
}

@Component({
    selector: 'app-market',
    standalone: true,
    imports: [CommonModule, MarketItemComponent, CounterComponent],
    templateUrl: './market.component.html',
    styleUrls: ['./market.component.css']
})

export class MarketComponent implements OnInit {
    marketService = inject(MarketService);
    portfolioService = inject(PortfolioService);

    stocksArray = signal<MarketStock[]>([]);

    ngOnInit(): void {
        this.marketService.getMarketFromApi()
            .pipe(
                catchError(err => {
                    console.error(err);
                    return of({});
                })
            )
            .subscribe((res: { [symbol: string]: { price: string } }) => {
                // Convert object to array
                const array: MarketStock[] = Object.keys(res).map(symbol => ({
                    symbol,
                    price: res[symbol].price
                }));

                this.stocksArray.set(array);
            });
    }

    onToggle(stock: MarketStock) {
        this.portfolioService.toggleStock(stock);
    }

    get symbols(): MarketStock[] {
        return this.stocksArray();
    }

}
