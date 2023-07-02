import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  public myPath = 'assets/connect.json';
  constructor(public _http: HttpClient) {}

  getRoles() {
    return this._http.get('http://localhost:3000/roles/getroles');
  }

  getdatadocs() {
    // return this._http.get('http://localhost:3000/getdatadocs');
  }

  createData(dataJson: object) {
    // const headers = new HttpHeaders().set(
    //   'Content-Type',
    //   'application/json; charset=utf-8'
    // );
    // return this._http.post('http://localhost:3000/createdata', dataJson);
  }
}
