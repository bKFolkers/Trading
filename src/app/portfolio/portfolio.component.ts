import {Component, inject} from '@angular/core';
import {PortfolioService} from "../services/portfolio.service";
import {CommonModule} from "@angular/common";
import {MarketItemComponent} from "../components/market-item/market-item.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, MarketItemComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolioService = inject(PortfolioService);
}
