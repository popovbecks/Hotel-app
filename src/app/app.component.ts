import { Hotel } from './interfaces/hotel';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public currentHotel: Hotel;
  public hotels: Hotel[] = [
      {
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
          water: 11,
          icon: 'wb_sunny'
        },
        profile: {
          followers: 112,
          following: 11,
          photo: 'assets/images/image1.jpg'
        },
        stars: 3
      },
    {
      id: 1,
      title: 'Ortega Beach Hotel',
      address: 'Ortega state 2345 F. Sinatra str',
      description: 'Best one!',
      phone: '+3242353434',
      picture: 'https://www.amtrak.com/content/dam/projects/dotcom/english/public/images/text-with-image-square/hotel-building-pool.jpg/_jcr_content/renditions/cq5dam.web.600.600.jpeg',
      photos: [
        'https://exp.cdn-hotels.com/hotels/3000000/2130000/2122700/2122663/2122663_127_z.jpg',
        'https://www.pandox.se/globalassets/hotels/norway/thon-hotel-sorlandet/basseng-bilde-av-hotellet.jpg'
      ],
      weather: {
        temperature: 28,
        water: 27,
        icon: 'wb_sunny'
      },
      profile: {
        followers: 112,
        following: 11,
        photo: 'https://tatilsepeti.cubecdn.net/Files/TesisResim/00331/tsr00331636590643372864907.jpg'
      },
      stars: 5
    },
    {
      id: 2,
      title: 'Barracuda Sky Resort',
      address: 'California',
      description: 'Good choice for family relax!',
      phone: '+3242353434',
      picture: 'http://static.asiawebdirect.com/m/bangkok/portals/bali-indonesia-com/homepage/top10/top10-budget-hotels-sanur/pagePropertiesImage/top10-budget-hotels-sanur.jpg',
      photos: [
        'https://images.trvl-media.com/hotels/10000000/9850000/9848300/9848237/9848237_63_z.jpg',
        'https://t-ec.bstatic.com/images/hotel/max1024x768/158/158871498.jpg'
      ],
      weather: {
        temperature: 26,
        water: 25,
        icon: 'wb_sunny'
      },
      profile: {
        followers: 128,
        following: 19,
        photo: 'https://images.trvl-media.com/hotels/13000000/12510000/12507000/12506986/12506986_59_z.jpg'
      },
      stars: 4
    },
      ];
  choiceHotel(item) {
    this.currentHotel = item;
  }
  ngOnInit () {
    this.currentHotel = this.hotels[0];
  }
}
