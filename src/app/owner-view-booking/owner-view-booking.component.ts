import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-owner-view-booking',
  templateUrl: './owner-view-booking.component.html',
  styleUrls: ['./owner-view-booking.component.css']
})
export class OwnerViewBookingComponent implements OnInit {

  bookings;
  unlockVal = true;
  unlockText = "Unlock";
  constructor(private _http: Http, private service: BookingService) { }

  ngOnInit() {
    this.service.getBookings().subscribe(res => this.bookings = res);
  }

  bookingUpdate(booking, name, date, time, phone, partysize, status, area, table){

    var dates = date.split('-');
    booking['name'] = name;
    booking['date'] = dates[1] + "-" + dates[2] + "-" + dates[0];
    booking['time'] = time.replace(':','-');
    booking['phone'] = phone;
    booking['partysize'] = partysize;
    booking['status'] = status;
    booking['area'] = area;
    booking['table'] = table;
    booking['status'] = status;
    this.service.updateStatus(booking, booking._id).subscribe();
  }

  search(name, phone, status, code){
    this.service.getSearchedBookings(name, phone, status, code).
    subscribe(res => this.bookings = res);
  }

  reset(){
    this.service.getBookings().subscribe(res => this.bookings = res);
  }

  reload(){
    window.location.reload();
  }

  unlock(){
    if(this.unlockVal === true){
      this.unlockVal = false;
      this.unlockText = "Lock";
    }else{
      this.unlockVal = true;
      this.unlockText = "Unlock";
    }
  }

}
