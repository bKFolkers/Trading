import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Market} from "../model/market.type";

@Injectable({
    providedIn: 'root'
})
export class MarketService {
    http = inject(HttpClient);

    getMarketFromApi(): Observable<Market> {
        const url = `https://mocki.io/v1/aca8d3c2-86cd-4278-ad24-e18767529602`;
        return this.http.get<Market>(url);
    }
}
