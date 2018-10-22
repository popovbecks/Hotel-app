import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(hotel: any, value: any): any {
    if (!value) {
      return hotel;
    }
    return hotel.filter(hotelItem => {
      return hotelItem.title.toLowerCase().includes(value.toLowerCase());
    });
  }

}
