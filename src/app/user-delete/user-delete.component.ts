import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user-service/user-service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {
  id: any;
  firstName: any;
  alert: any;
  disableDelete: boolean = false;

  constructor(private service: UserService, private route: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getUser(this.activeRoute.snapshot.params['id']);
  }

  getUser(id: any) {
    this.service.getUser(id).subscribe(({data}: any) => {
      const {user} = data;
      this.id = user.id;
      this.firstName = user.firstName;
    })
  }

  deleteUser(id: any) {
    this.service.deleteUser(id).subscribe();
    this.disableDelete = true;
    this.alert = true;
  }

  closeAlert() {
    this.alert = false;
    this.route.navigateByUrl('userList')
  }
}
