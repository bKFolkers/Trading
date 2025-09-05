import {Component, signal} from '@angular/core';
import {GreetingComponent} from "../components/greeting/greeting.component";
import {CounterComponent} from "../components/counter/counter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeMessage = signal("Welcome to Loss Vegas");

  keyUpHandler(event : KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }
}