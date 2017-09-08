import { Component, OnInit } from '@angular/core';
import { Image } from '../image.interface';
import { Http } from '@angular/http';
import { ContactServiceService } from '../contact-service.service';

var IMAGES: Image[] = [
  { "title": "Yunnan Crossbridge Rice Noodles", "url": "../assets/crossbridge.jpg" },
  { "title": "Dai Fried Fish", "url": "../assets/friedfish.jpeg" },
  { "title": "Thai Pineapple Rice", "url": "../assets/pineapple.jpg" },
  { "title": "Dai Fried Pork", "url": "../assets/friedpork.jpg" },
  { "title": "Bamboo Rice", "url": "../assets/bamboo.jpg" }
];

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  images = IMAGES;
  content = {};
  constructor(private _http: Http, private service: ContactServiceService) { }

  ngOnInit() {
    this.service.getContact().subscribe(res => this.content = res);
  }

}
