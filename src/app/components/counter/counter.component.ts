import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counterValue =  signal(0);
  increment() {
    this.counterValue.update((val) =>  val + 1);
  }

  decrement() {
    this.counterValue.update((val) => val - 1);
  }

  reset() {
    this.counterValue.update((val) => 0);
  }
}