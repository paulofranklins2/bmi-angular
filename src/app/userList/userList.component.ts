import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../services/user-service/user-service";

@Component({
  selector: 'app-userList',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.scss']
})
export class UserListComponent implements OnInit {
  // @ts-ignore
  userList: any[];
  displayedColumns = ['id', 'firstName', 'lastName', 'height', 'weight', 'imc', 'healthStatus', 'update', 'delete'];

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
