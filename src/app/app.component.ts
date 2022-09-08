import {Component} from '@angular/core';
import {UserService} from "./services/user-service/user-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'imcCalculator';

  constructor(private service: UserService) {
  }
}
