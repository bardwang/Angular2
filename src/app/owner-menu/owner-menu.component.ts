import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-owner-menu',
  templateUrl: './owner-menu.component.html',
  styleUrls: ['./owner-menu.component.css']
})
export class OwnerMenuComponent implements OnInit {

  myVal = 1;
  info = {};
  constructor(private http:Http, private service:ContactServiceService) { }

  ngOnInit() {
    sessionStorage.setItem('ownerRelogin', 'true');
    this.service.getContact().subscribe(res => this.info = res);
  }

  logout(){
    sessionStorage.clear();
    window.location.reload();
  }

  save(name, address, tel, email, content){
    var task = {
      '_id':'599bb331f9ac571f4060cb64',
      'name': name,
      'address': address,
      'tel': tel,
      'email': email,
      'content': content
    }
    this.service.updateContact(task).subscribe();
  }

}
