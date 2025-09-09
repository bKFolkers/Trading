import { Injectable, signal } from '@angular/core';

export interface PortfolioStock {
  symbol: string;
  price: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private _portfolio = signal<PortfolioStock[]>([]);

  portfolio = this._portfolio.asReadonly();

  toggleStock(stock: PortfolioStock) {
    const current = this._portfolio();
    const exists = current.find(s => s.symbol === stock.symbol);

    if (exists) {
      // Verwijderen als hij al in de portfolio zit
      this._portfolio.set(current.filter(s => s.symbol !== stock.symbol));
    } else {
      // Toevoegen met symbol + price
      this._portfolio.set([...current, stock]);
    }
  }

  isInPortfolio(symbol: string): boolean {
    return this._portfolio().some(s => s.symbol === symbol);
  }
}
