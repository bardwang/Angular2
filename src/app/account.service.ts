import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {

  private _url: string = 'api/accounte/';
  private _urlep: string = 'api/accountep/';
  private _urluep: string = 'api/accountuep/';
  private _urloep: string = 'api/accountoep/';

  constructor(private _http: Http) { }

    getExistAccount(email){
      return this._http.get(this._url + email)
        .map((response: Response) => response.json());
    }

    getAccount(email, password){
      return this._http.get(this._urlep + email + '&' + password)
        .map((response: Response) => response.json());
    }

    getUserAccount(email, password){
      return this._http.get(this._urluep + email + '&' + password)
        .map((response: Response) => response.json());
    }

    getOwnerAccount(email, password){
      return this._http.get(this._urloep + email + '&' + password)
        .map((response: Response) => response.json());
    }

    postAccount(task){
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this._http.post('/api/account', JSON.stringify(task), {headers: headers});
    }

}
