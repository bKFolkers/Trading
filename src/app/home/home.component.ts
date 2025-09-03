import {Component, signal} from '@angular/core';
import {GreetingComponent} from "../components/greeting/greeting.component";
import {CounterComponent} from "../components/counter/counter.component";
import {FooterComponent} from "../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeMessage = signal("Welcome to Loss Vegas");

  keyUpHandler(event : KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }
}
