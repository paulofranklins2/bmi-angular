import {Component, EventEmitter, Output} from "@angular/core";
import {UserService} from "../services/user-service/user-service";
import {UserModels} from "../models/user.models";
import {Router} from "@angular/router";


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  @Output() onSubmit = new EventEmitter<any>();

  // @ts-ignore
  firstName: string;
  // @ts-ignore
  lastName: string;
  // @ts-ignore
  height: number;
  // @ts-ignore
  weight: number;


  constructor(private service: UserService, private route: Router) {
  }

  imcForm() {
    const submittedForm: UserModels = {
      firstName: this.firstName,
      lastName: this.lastName,
      height: this.height,
      weight: this.weight,
    };
    this.service.postUser(submittedForm).subscribe(user => {
        this.route.navigateByUrl('userList')
      },
      error => console.log(error))
  }
}
