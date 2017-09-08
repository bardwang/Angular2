import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactServiceService {

  private _url: string = 'api/info';

  constructor(private _http: Http) { }

  getContact(){
    return this._http.get(this._url)
      .map((response: Response) => response.json());
  }

  updateContact(task){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put(this._url, JSON.stringify(task), {headers : headers}).map(res => res.json());
  }

}
