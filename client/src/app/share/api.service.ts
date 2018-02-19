import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {

  options: any = {
    headers: null,
    params: null
  };

  constructor(
    private httpClient: HttpClient,
  ) { }

  headerWithToken(token: string): void {
    if (token) {
      this.options.headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + token
      });
    }
  }

  headerWithParams(params: any): void {
    if (params) {
      this.options.params = params;
    }
  }

  get(url: string, params?: any, token?: string): Observable<any> {
    this.headerWithToken(token);
    this.headerWithParams(params);
    return this.httpClient.get(url, this.options);
  }

  getOne(url: string, id?: number | string, token?: string): Observable<any> {
    console.log('id = ', id);
    const urlBuild = `${url}/${id}`;
    this.headerWithToken(token);
    return this.httpClient.get(urlBuild, this.options);
  }

  put(url: string, body: any, token?: string): Observable<any> {
    this.headerWithToken(token);
    return this.httpClient.put(url, body, this.options);
  }

  post(url: string, body: any, token?: string): Observable<any> {
    this.headerWithToken(token);
    return this.httpClient.post(url, body, this.options);
  }

  delete(url: string, id?: number | string, token?: string): Observable<any> {
    console.log('id = ', id);
    const urlBuild = `${url}/${id}`;
    this.headerWithToken(token);
    return this.httpClient.delete(urlBuild, this.options);
  }
}
