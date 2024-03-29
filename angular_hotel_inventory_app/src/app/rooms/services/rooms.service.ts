import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditionar, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fforbestravelguide%2F2019%2F05%2F15%2Fworlds-best-hotel-rooms%2F&psig=AOvVaw1XA7gxWMQ04jw7ugBIFu5s&ust=1709006932913000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOicvIuRyIQDFQAAAAAdAAAAABAE',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 5.3456,
    },
    {
      roomNumber: 2,
      roomType: 'Regular Room',
      amenities: 'Air Conditionar, Free Wi-Fi, TV, Bathroom',
      price: 50,
      photos: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hotelonphillips.com%2Fsioux-falls-sd-hotel-rooms&psig=AOvVaw1XA7gxWMQ04jw7ugBIFu5s&ust=1709006932913000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOicvIuRyIQDFQAAAAAdAAAAABAJ',
      checkinTime: new Date('11-Dec-2021'),
      checkoutTime: new Date('12-Dec-2021'),
      rating: 2.59567,
    },
    {
      roomNumber: 3,
      roomType: 'Honeymoon Room',
      amenities: 'Air Conditionar, Free Wi-Fi, TV, Bathroom, Kitchen, Condoms',
      price: 1000,
      photos: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsthotelsmalta.com%2Far%2Fapartment-or-hotel-room-which-is-better%2F&psig=AOvVaw1XA7gxWMQ04jw7ugBIFu5s&ust=1709006932913000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOicvIuRyIQDFQAAAAAdAAAAABAR',
      checkinTime: new Date('11-Aug-2021'),
      checkoutTime: new Date('12-Aug-2021'),
      rating: 1.5297,
    },
    {
      roomNumber: 4,
      roomType: 'Combined Room',
      amenities: 'Air Conditionar, Free Wi-Fi, Bathroom',
      price: 25,
      photos: 'https://images.luxuryhotel.guru/hotelimage.php?p_id=6502037&code=52cb80bf41905f3d0b0bbe818f20ef6b&webpage=hotels-with-balcony.com&link=https%3A%2F%2Fsubdomain.cloudimg.io%2Fcrop%2F512x384%2Fq70.fcontrast10.fbright0.fsharp5%2Fhttps%3A%2F%2Fq-xx.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1536%2F276462018.jpg%3Fk%3Df1845625df7402ed9236912805fc541ad5259d1b26e9a386e73856348ac1c17f%26o%3D',
      checkinTime: new Date('1-Jan-2021'),
      checkoutTime: new Date('10-Jan-2021')
    },
    {
      roomNumber: 5,
      roomType: 'Laro Puti Room',
      amenities: 'Air Conditionar, Free Wi-Fi, TV, Bathroom, Kitchen, Chikne',
      price: 100,
      photos: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.expedia.com%2FSioux-Falls-Hotels.d6059512.Travel-Guide-Hotels&psig=AOvVaw1XA7gxWMQ04jw7ugBIFu5s&ust=1709006932913000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOicvIuRyIQDFQAAAAAdAAAAABAh',
      checkinTime: new Date('14-Feb-2021'),
      checkoutTime: new Date('15-Feb-2021')
    }];

  constructor() { }

  getRooms(): RoomList[] {
    return this.roomList;
  }
}
