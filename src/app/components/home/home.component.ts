import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  currentBackgroundImage = "";
  currentBackgroundImageIndx = 0;
  backgroundImageOptions: string[] = [
    '../../../assets/background-hero-images/el_capitan_pano.jpg',
    '../../../assets/background-hero-images/forest_background.jpg',
    '../../../assets/background-hero-images/river_el_capitan_background.jpg',
  ];

  constructor() {
    this.currentBackgroundImage = this.backgroundImageOptions[this.currentBackgroundImageIndx];
    setInterval(this.changeBackgroundImage.bind(this), 3000);
  }

  ngOnInit(): void {
  }

  changeBackgroundImage() {
    this.currentBackgroundImageIndx += 1;
    if (this.currentBackgroundImageIndx >=  this.backgroundImageOptions.length) {
      this.currentBackgroundImageIndx = 0
    }
    this.currentBackgroundImage = this.backgroundImageOptions[this.currentBackgroundImageIndx];
  }

}
