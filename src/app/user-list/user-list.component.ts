import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../services/user-service/user-service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  // @ts-ignore
  userList: any[];
  displayedColumns = ['id', 'firstName', 'lastName', 'height', 'weight', 'imc', 'healthStatus', 'date', 'update', 'delete'];

  constructor(private service: UserService) {
  }

  testHealthStatus: [] = [];

  ngOnInit(): void {
    this.service.getUserList().subscribe((userList: any) => {
      console.table(userList.data.user);
      this.userList = userList.data.user;
      this.testHealthStatus = userList.data.user.healthStatus;
    })
  }

}
