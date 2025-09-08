import {Component, signal} from '@angular/core';
import {GreetingComponent} from "../components/greeting/greeting.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeTitle = signal("🐂 Welcome to Loss Vegas 🐻");
  homeSubTitle = signal("Trade smarter, not harder")
  homeIntroduction = signal("Follow real stock prices, track your portfolio," +
      " and test your trading skills in a risk-free environment!")

  keyUpHandler(event : KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }
}