import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  login = false;
  relogin = false;
  account = null;
  register = false;
  constructor(private http:Http, private service: AccountService){
  }

  ngOnInit(){
    sessionStorage.setItem('slideshow','false');
    if(sessionStorage.getItem('userRelogin')){
      this.relogin = true;
    }else{
      this.relogin = false;
    }
  }

  loginFun(email, password){
    this.service.getUserAccount(email, password).subscribe(res => this.account = res);
    this.login = true;
  }

  loginFailed(){
    if(this.login === true && this.account === null){
      return true;
    }else{
      return false;
    }
  }

  loginSuccess(){
    if(this.register === true){
      return true;
    }else if(this.relogin === true){
      return true;
    }else if(this.login === true && this.account !== null){
      return true;
    }else{
      return false;
    }
  }

  registerAcc(){
    this.register = true;
  }

}
