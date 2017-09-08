import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-owner-view-seating-area',
  templateUrl: './owner-view-seating-area.component.html',
  styleUrls: ['./owner-view-seating-area.component.css']
})
export class OwnerViewSeatingAreaComponent implements OnInit {

  bookings;
  area;
  constructor(private _http: Http, private service: BookingService) { }

  ngOnInit() {
    this.service.getBookings().subscribe(res => this.bookings = res);
  }

}
