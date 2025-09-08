import { Component, input } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-market-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './market-item.component.html',
    styleUrls: ['./market-item.component.css']
})
export class MarketItemComponent {
    symbol = input<string>();
    price = input<string>();
}
