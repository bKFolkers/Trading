import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketService } from "../services/market.service";
import { catchError, of } from "rxjs";
import {CounterComponent} from "../components/counter/counter.component";
import {Market} from "../model/market.type";
import {MarketItemComponent} from "../components/market-item/market-item.component";

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

    get symbols(): string[] {
        return Object.keys(this.stocks());
    }
}
