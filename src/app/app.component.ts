import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  userColor;
  ownerColor;
  slidehide;
  slideshow;
  ngOnInit(){
    this.slidehide = true;
    sessionStorage.removeItem('slideshow');
  }

  changeUser(){
    this.userColor = '#555';
    this.ownerColor = '#ccc';
    this.slidehide = false;
  }

  changeOwner(){
    this.userColor = '#ccc';
    this.ownerColor = '#555';
    this.slidehide = false;
  }

  slide(){
    this.slideshow = sessionStorage.getItem('slideshow');
    if(this.slideshow) {
      this.slidehide = false;
    }
    return this.slidehide;
  }

}
