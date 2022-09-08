import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user-service/user-service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserPatchModels} from "../models/userPatch.models";

@Component({
  selector: 'app-patchForm',
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

  constructor(private service: UserService, private route: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.service.currentData(this.activeRoute.snapshot.params['id']).subscribe((result) => {
    this.id = this.activeRoute.snapshot.params['id']
      console.log(result)

      // @ts-ignore
      // this.editUser = new FormControl({
      //   id: new FormControl(this.activeRoute.snapshot.params['id']),
      //   firstName: new FormControl(result),
      //   lastName: new FormControl(result),
      //   height: new FormControl(result),
      //   weight: new FormControl(result)
      // })
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
        this.route.navigateByUrl('patchUser')
      this.alert = true;
      },
      error => console.log(error))
  }

  patch(){

  }

  closeAlert() {
    this.alert = false;
  }
}
