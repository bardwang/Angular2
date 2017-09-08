import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BookingService } from '../booking.service'
declare var $:any;

@Component({
  selector: 'app-useredit-update',
  templateUrl: './useredit-update.component.html',
  styleUrls: ['./useredit-update.component.css'],
  inputs: ['booking']
})
export class UsereditUpdateComponent implements OnInit {

  booking;
  post = {};
  code;
  submit = false;
  myVal = 1;
  constructor(private _http: Http, private service: BookingService) { }

  ngOnInit() {
    debugger;
    $('.form_date').datetimepicker({
      language:  'fr',
      weekStart: 1,
      todayBtn:  1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 2,
      minView: 2,
      forceParse: 0
    });
    $('.form_time').datetimepicker({
      language:  'fr',
      weekStart: 1,
      todayBtn:  1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 1,
      minView: 0,
      maxView: 1,
      forceParse: 0
    });
  }

  // to check if the date and time columns are filled
  checkDateTime(){
    if($('#dateInput').attr('value') !== "" && $('#timeInput').attr('value') !== ""){
      return false;
    }else {
      return true;
    }
  }

  // to update a booking
  updateBooking(partysize){
    var task = {
      '_id': this.booking._id,
      'date': $('#dateInput').attr('value'),
      'time': $('#timeInput').attr('value'),
      'partysize' : this.booking.partysize,
      'name' : this.booking.name,
      'phone' : this.booking.phone,
      'status' : 'Pending'
    };
    if(partysize !== "") {
      task['partysize'] = partysize;
    }
    this.service.updateStatus(task, this.booking._id).subscribe();
    this.myVal = 2;
  }

  // to cancel a booking
  cancelBooking(){
    this._http.delete('/api/book/' + this.booking._id).subscribe();
    this.myVal = 3;
  }

  formShow(){
    if(this.myVal === 1){
      return false;
    }else{
      return true;
    }
  }

  successShow(){
    if(this.myVal === 2){
      return true;
    }else{
      return false;
    }
  }

  cancelShow(){
    if(this.myVal === 3){
      return true;
    }else{
      return false;
    }
  }

}
