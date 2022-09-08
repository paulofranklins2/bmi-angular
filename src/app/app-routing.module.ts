import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./userList/userList.component";
import {UserFormComponent} from "./userForm/userForm.component";
import {PatchFormComponent} from "./patchForm/patch-form.component";
import {UserDeleteComponent} from "./userDelete/user-delete.component";
import {UserFindComponent} from "./userFinder/user-find.component";
import {SingleUserComponent} from "./userSingle/single-user.component";

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
