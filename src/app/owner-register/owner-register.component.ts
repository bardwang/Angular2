import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-owner-register',
  templateUrl: './owner-register.component.html',
  styleUrls: ['./owner-register.component.css']
})
export class OwnerRegisterComponent implements OnInit {

  post = {};
  submit = false;
  account = null;
  click = false;
  constructor(private _http: Http, private service: AccountService) {
  }

  ngOnInit() {
  }

  verify(email){
    this.click = true;
    this.service.getExistAccount(email).subscribe(res => this.account = res);
  }

  emailError(){
    if(this.account !== null && this.click === true){
      return true;
    }else{
      return false;
    }
  }

  emailChange(){
    this.account = "not null";
  }

  register(username, password, email){

    this.post['username'] = username;
    this.post['password'] = password;
    this.post['email'] = email;
    this.post['role'] = 'owner';
    this.service.postAccount(this.post).subscribe();
    this.submit = true;
  }

}
