import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketService } from "../services/market.service";
import { catchError, of } from "rxjs";

@Component({
    selector: 'app-market',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './market.component.html',
    styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
    marketService = inject(MarketService);

    // store multiple stock prices
    prices = signal<{ [symbol: string]: { price: string } }>({});

    ngOnInit(): void {
        this.marketService.getMarketFromApi()
            .pipe(
                catchError(err => {
                    console.error(err);
                    return of({});
                })
            )
            .subscribe(res => {
                this.prices.set(res);
            });
    }

    // changed from method to getter
    get symbols(): string[] {
        return Object.keys(this.prices());
    }
}
