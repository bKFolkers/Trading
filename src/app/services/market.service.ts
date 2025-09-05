import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MarketService {
    http = inject(HttpClient);

    getMarketFromApi(): Observable<{ [symbol: string]: { price: string } }> {
        const url = `https://mocki.io/v1/aca8d3c2-86cd-4278-ad24-e18767529602`;
        return this.http.get<{ [symbol: string]: { price: string } }>(url);
    }
}
