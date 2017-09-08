import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BookingService } from '../booking.service'


@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  codeSubmit = false;
  booking = null;
  bookingDate = "";
  bookingTime = "";
  bookingPartysize = "";
  bookingName = "";

  constructor(private _http: Http, private service: BookingService) { }

  ngOnInit() {
  }

  // to submit confirmation code
  submitCode(code){
    this.service.getEditBooking(code)
      .subscribe(res => {
        this.booking = res;
        this.bookingDate = res.date;
        this.bookingTime = res.time;
        this.bookingPartysize = res.partysize;
        this.bookingName = res.name;
      });
    this.codeSubmit = true;
  }

}
