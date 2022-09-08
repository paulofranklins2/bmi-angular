import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user-service/user-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-userDelete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {
  id: any;
  firstName: any;
  alert: any;

  constructor(private service: UserService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.service.currentData(this.activeRoute.snapshot.params['id']).subscribe((result) => {
      this.id = this.activeRoute.snapshot.params['id']
    })
  }

  deleteUser(id: any) {
    this.service.deleteUser(id).subscribe((value) => {
      console.log(value);
      this.alert = true;
    })
  }

  closeAlert() {
    this.alert = false;
  }
}
