import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemModel } from './models/item';
import { MessageModel } from './models/message';
import { ItemRequestModel } from './models/request';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  static readonly BASE_URL = 'http://127.0.0.1:3000/';

  constructor(private http: HttpClient) { }

  postItem(item: any) {
    return this.http.post(ApiService.BASE_URL + 'addItem', item, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getItems(): Observable<[ItemModel]> {
    return this.http.get<[ItemModel]>(ApiService.BASE_URL + 'items', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  postRequest(request: any): Observable<MessageModel> {
    return this.http.post<MessageModel>(ApiService.BASE_URL + 'request', request, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getRequests(): Observable<ItemRequestModel[]> {
    return this.http.get<ItemRequestModel[]>(ApiService.BASE_URL + 'requests', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  postApprove(request: ItemRequestModel[]): Observable<MessageModel> {
    return this.http.post<MessageModel>(ApiService.BASE_URL + 'approve', request, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}

