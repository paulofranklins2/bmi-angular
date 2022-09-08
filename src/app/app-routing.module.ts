import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {UserFormComponent} from "./user-form/user-form.component";
import {PatchFormComponent} from "./patch-form/patch-form.component";
import {UserDeleteComponent} from "./user-delete/user-delete.component";
import {UserFindComponent} from "./user-finder/user-find.component";
import {SingleUserComponent} from "./user-single/single-user.component";

const routes: Routes = [
  {path: '', redirectTo: 'userList', pathMatch: 'full'},
  {path: 'userList', component: UserListComponent},
  {path: 'userForm', component: UserFormComponent},
  {path: 'userFinder', component: UserFindComponent},
  {path: 'patchForm/:id', component: PatchFormComponent},
  {path: 'deleteUser/:id', component: UserDeleteComponent},
  {path: 'singleUser/:id', component: SingleUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
