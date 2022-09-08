import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user-service/user-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-userSingle',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  private id: any;
  firstName: any;
  lastName: any;
  height: any;
  weight: any;

  constructor(private service: UserService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.service.currentData(this.activeRoute.snapshot.params['id']).subscribe((result) => {
      this.id = this.activeRoute.snapshot.params['id']
    })
  }

  singleUser() {

  }
}
