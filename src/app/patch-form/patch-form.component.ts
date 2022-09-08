import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user-service/user-service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserPatchModels} from "../models/userPatch.models";

@Component({
  selector: 'app-patch-form',
  templateUrl: './patch-form.component.html',
  styleUrls: ['./patch-form.component.scss']
})
export class PatchFormComponent implements OnInit {
  id: any;
  firstName: any;
  lastName: any;
  height: any;
  weight: any;
  alert: any;
  // @ts-ignore
  user: any[];
  disablePatch: boolean = false;

  constructor(private service: UserService, private route: Router, private activeRoute: ActivatedRoute) {
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
      this.weight = user.weight
    })
  }

  patchForm() {
    const submittedPatchForm: UserPatchModels = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      height: this.height,
      weight: this.weight,
    };
    this.service.patchUser(submittedPatchForm).subscribe(value => {
        this.alert = true;
        this.disablePatch = true;
      },
      error => console.log(error))
  }

  closeAlert() {
    this.alert = false;
    this.route.navigateByUrl('userList')
  }
}
