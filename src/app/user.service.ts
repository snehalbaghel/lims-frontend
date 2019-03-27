import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './models/user';
import { MessageModel } from './models/message';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static readonly BASE_URL = 'http://127.0.0.1:3000/';

  constructor(private http: HttpClient) {
   }

  login(body: any) {
    return this.http.post(UserService.BASE_URL + 'login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  // get currentUser(): UserModel {
  //   return this.cUser;
  // }

  user(): Observable<UserModel> {
    return this.http.get<UserModel>(UserService.BASE_URL + 'user', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  logout(): Observable<MessageModel> {
    return this.http.get<MessageModel>(UserService.BASE_URL + 'logout', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}
