import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {CurrencyPipe} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent, CurrencyPipe],
  template: `
    <div class="app-container">
  <app-header></app-header>
  <main class="app-content">
    <router-outlet></router-outlet>
  </main>
  <app-footer></app-footer>
</div>
  `,
  styles: `
    main {    
        padding: 16px;
    }
  `,
})
export class AppComponent {
  title = 'Loss Vegas';
}
