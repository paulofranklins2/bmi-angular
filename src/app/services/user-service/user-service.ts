import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModels} from "../../models/user.models";
import {UserPatchModels} from "../../models/userPatch.models";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host = 'http://localhost:8080'
  private userListUrl = this.host + '/user/list'
  private postUrl = this.host + '/user/save'
  private patchUrl = this.host + '/user/update'
  private deleteUrl = this.host + '/user/delete'
  private idUrl = this.host + '/user/get'

  private userList: any[] = [];
  private id: any;

  constructor(private httpClient: HttpClient) {
    this.userList = [];
  }

  getUserList(): Observable<UserService[]> {
    return this.httpClient.get<UserService[]>(this.userListUrl);
  }

  postUser(user: UserModels): Observable<UserService> {
    console.log(this.httpClient.post(this.postUrl, user))
    return this.httpClient.post<any>(this.postUrl, user);
  }

  patchUser(user: UserPatchModels): Observable<UserService> {
    return this.httpClient.patch<UserService>(this.patchUrl, user);
  }

  deleteUser(id: string) {
    return this.httpClient.delete<UserService>(`${this.deleteUrl}/${id}`);
  }

  currentData(id: string) {
    return this.httpClient.get<UserService>(`${this.idUrl}/${id}`);
  }

  userFinder(id: string) {
    return this.httpClient.get<UserService>(`${this.idUrl}/${id}`);
  }
}
