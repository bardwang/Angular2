import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookingService {

  private _url: string = 'api/book/';
  private _urls: string = 'api/books';
  private _urls2: string = 'api/booksf/';
  private _url_id: string = 'api/booki/';

  constructor(private _http: Http) { }

  getBooking(date, time, phone){
    return this._http.get(this._url + date + '&' + time + '&' + phone)
      .map((response: Response) => response.json());
  }

  getSearchedBookings(name, phone, status, code){
    return this._http.get(this._urls2 + name + '|' + phone + '|' + status + '|' + code)
      .map((response: Response) => response.json());
  }

  getBookings(){
    return this._http.get(this._urls)
      .map((response: Response) => response.json());
  }

  postBooking(task){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/book', JSON.stringify(task), {headers : headers}).map(res => res.json());
  }

  getEditBooking(code){
    return this._http.get(this._url_id + code)
      .map((response: Response) => response.json());
  }

  updateStatus(task, id){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put('/api/bookupdate/' + id, JSON.stringify(task), {headers : headers}).map(res => res.json());
  }

}
