import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { BookingService } from '../booking.service'
declare var $:any;

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css'],
})
export class UsercreateComponent implements OnInit {

  post = {};
  submit = false;
  codeSubmit = false;
  code = null;
  constructor(private _http: Http, private service: BookingService) { }

  ngOnInit() {
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

  // to create a booking
  createBooking(partysize, name, phone){
      this.post['date'] = $('#dateInput').attr('value');
      this.post['time'] = $('#timeInput').attr('value');
      this.post['partysize'] = partysize;
      this.post['name'] = name;
      this.post['phone'] = phone;
      this.post['status'] = 'Pending';
      this.service.postBooking(this.post).subscribe();

      // to get the confirmation code
      this.service.getBooking(this.post['date'], this.post['time'], this.post['phone']).subscribe(res => this.code = res._id);
      this.submit = true;
  }

  // to check if the date and time columns are filled
  checkDateTime(){
    if($('#dateInput').attr('value') !== "" && $('#timeInput').attr('value') !== ""){
      return false;
    }else {
      return true;
    }
  }

}
