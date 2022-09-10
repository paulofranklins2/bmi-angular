import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user-service/user-service";

@Component({
  selector: 'app-user-finder',
  templateUrl: './user-find.component.html',
  styleUrls: ['./user-find.component.scss']
})
export class UserFindComponent implements OnInit {
  id: any;
  alert: boolean = false;

  constructor(private service: UserService) {
  }

  ngOnInit(): void {
  }

  userFinder(id: any) {

  }

  getUser(id: any) {
    this.service.getUser(id).subscribe(({data}: any) => {
      const {user} = data;
      this.alert = true;
    })
  }
}
