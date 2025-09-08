import {Component, input} from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  homeTitle = input("Title");
  homeSubTitle = input("Subtitle")
  homeIntroduction = input ("Introduction")
}
