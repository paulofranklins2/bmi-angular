import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user-service/user-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-single',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  id: any;
  firstName: any;
  lastName: any;
  height: any;
  weight: any;
  imc: any;
  healthStatus: any;
  date: any ;

  constructor(private service: UserService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getUser(this.activeRoute.snapshot.params['id'])
  }

  getUser(id: any) {
    this.service.getUser(id).subscribe(({data}: any) => {
      const {user} = data;
      this.id = user.id;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.height = user.height;
      this.weight = user.weight;
      this.imc = user.imc;
      this.healthStatus = user.healthStatus;
      this.date = user.date;
    })
  }
}
