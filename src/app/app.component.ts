import { Hotel } from './interfaces/hotel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public currentHotel: Hotel;
  searchString: string;
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
    {
      id: 3,
      title: 'Grand Ring',
      address: 'Kemer Turkey',
      description: 'All inclusive relax resort near Middle Coast Sea',
      phone: '+3242212454434',
      picture: 'https://exp.cdn-hotels.com/hotels/7000000/6240000/6231500/6231441/942b7099_z.jpg',
      photos: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDTHlTJ1kKEG6n4vWGTpnFI_LezZrwFrio1FOzrnd_c0xnZDpLw',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_xRlft-JqDMT6ofH4_CZJCAkjv6Nd7ggXByLzq5i0p0CsmxfjA'
      ],
      weather: {
        temperature: 32,
        water: 28,
        icon: 'wb_sunny'
      },
      profile: {
        followers: 328,
        following: 256,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5uE_bNpc5XdxuLPY0pzqidB7tMMEzNRAZG6mz8o7bJHdC2Fuimg'
      },
      stars: 5
    },
    {
      id: 4,
      title: 'Las Vegas NV',
      address: 'Las Vegas USA',
      description: 'All inclusive sunny beach resort with black Jack and Casino',
      phone: '+3282903642454434',
      picture: 'https://media-cdn.holidaycheck.com/w_1280,h_720,c_fill,q_80/ugc/images/26a2bc03-6c6f-327c-b03f-34ed855a72af',
      photos: [
        'https://static.yakala.co/images/0352113_0.jpeg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGveqc51E3VGfEoDy6TCyW77021a_t1E96VMz-BW-d8o1HRzd'
      ],
      weather: {
        temperature: 27,
        water: 25,
        icon: 'wb_sunny'
      },
      profile: {
        followers: 458,
        following: 396,
        photo: 'https://dtour.ir/images/sampledata/stanbul.jpg'
      },
      stars: 5
    }
  ];
  choiceHotel(item) {
    this.currentHotel = item;
  }
  ngOnInit() {
    this.currentHotel = this.hotels[0];
  }
}
