import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user-service/user-service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-userFinder',
  templateUrl: './user-find.component.html',
  styleUrls: ['./user-find.component.scss']
})
export class UserFindComponent implements OnInit {
  id: any;

  constructor(private service: UserService, private route: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  userFinder(id: any) {
    // this.service.currentData(id).subscribe((value) => {
    //   console.log(value);
    //   this.id = this.activeRoute.snapshot.params['id']
    // })
  }
}
