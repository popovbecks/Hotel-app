import { Hotel } from './interfaces/hotel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hotel: Hotel = {
    id: 0,
    title: 'Universal Cabana',
    address: 'Orlando',
    description: 'Best one!',
    phone: '+3242353434',
    picture: 'assets/images/image1.jpg',
    photos: [
      'assets/images/image2.jpeg',
      'assets/images/image3.jpeg'
    ],
    weather: {
      temperature: 12,
      wind: 11,
      icon: 'wb_sunny'
    },
    profile: {
      followers: 112,
      following: 11,
      photo: 'assets/images/image1.jpg'
    },
    stars: 3
  }
}
