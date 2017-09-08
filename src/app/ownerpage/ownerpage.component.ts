import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-ownerpage',
  templateUrl: './ownerpage.component.html',
  styleUrls: ['./ownerpage.component.css']
})
export class OwnerpageComponent {

  login = false;
  relogin = false;
  account = null;
  register = false;
  constructor(private http:Http, private service: AccountService){
  }

  ngOnInit(){
    sessionStorage.setItem('slideshow','false');
    if(sessionStorage.getItem('ownerRelogin')){
      this.relogin = true;
    }else{
      this.relogin = false;
    }
  }

  loginFun(email, password){
    this.service.getOwnerAccount(email, password).subscribe(res => this.account = res);
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
