import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OwnerpageComponent } from './ownerpage/ownerpage.component';
import { OwnerRegisterComponent } from './owner-register/owner-register.component';
import { AccountService } from "./account.service";
import { BookingService } from './booking.service';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UsereditUpdateComponent } from './useredit-update/useredit-update.component';
import { OwnerMenuComponent } from './owner-menu/owner-menu.component';
import { OwnerViewBookingComponent } from './owner-view-booking/owner-view-booking.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { TimePipe } from './timePipe';
import { DatePipe } from './datePipe';
import { DatePipe2 } from './datePipe2';
import { OwnerViewSeatingAreaComponent } from './owner-view-seating-area/owner-view-seating-area.component';
import { AreaPipe } from './areaFilter';
import { TablePipe } from './tableFilter';
import { SeatPipe } from './viewSeatingPipe';
import { UserPageComponent } from './user-page/user-page.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import {ContactServiceService} from "./contact-service.service";

@NgModule({
  declarations: [
    AppComponent,
    OwnerpageComponent,
    OwnerRegisterComponent,
    UsercreateComponent,
    UsereditComponent,
    UsereditUpdateComponent,
    OwnerMenuComponent,
    OwnerViewBookingComponent,
    TimePipe,
    DatePipe,
    DatePipe2,
    OwnerViewSeatingAreaComponent,
    AreaPipe,
    TablePipe,
    SeatPipe,
    UserPageComponent,
    UserMenuComponent,
    UserRegisterComponent,
    SlideshowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2Bs3ModalModule,
    RouterModule.forRoot([
      {path: 'users', component: UserPageComponent},
      {path: 'owners', component: OwnerpageComponent}
    ])
  ],
  providers: [AccountService, BookingService, ContactServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
