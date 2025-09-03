import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: "full",
        loadComponent: () => {
            return import('./home/home.component').then((m) => m.HomeComponent)
        },
    },
    {
        path: 'market',
        loadComponent: () => {
            return import('./market/market.component').then((m) => m.MarketComponent)
        },
    },
    {
        path: 'portfolio',
        loadComponent: () => {
            return import('./portfolio/portfolio.component').then((m) => m.PortfolioComponent)
        }
    },
];
