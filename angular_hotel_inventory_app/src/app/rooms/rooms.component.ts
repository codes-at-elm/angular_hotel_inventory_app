import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }

  title = "Room List";

  roomList: RoomList[] = [];
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;



  selectedRoom!: RoomList;

  constructor(private roomsService: RoomsService) {

  }

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View From Rooms Component";
    this.headerChildrenComponent.last.title = "Title of Last Header";
  }

  ngDoCheck(): void {
    console.log('on changes is called.');
  }

  ngAfterViewChecked(): void {

  }  

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }

  addRoom() {

    let addedRoomList: RoomList = {
      roomNumber: this.roomList.length + 1,
      roomType: 'Added Deluxe Room',
      amenities: 'Air Conditionar, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 10000,
      photos: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fforbestravelguide%2F2019%2F05%2F15%2Fworlds-best-hotel-rooms%2F&psig=AOvVaw1XA7gxWMQ04jw7ugBIFu5s&ust=1709006932913000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOicvIuRyIQDFQAAAAAdAAAAABAE',
      checkinTime: new Date('31-Dec-2021'),
      checkoutTime: new Date('01-Jan-2022'),
      rating: 8.98766,
    };

    //this.roomList.push(addedRoomList);
    this.roomList = [...this.roomList, addedRoomList];
  }

  changeTitle() {
    this.title = "Changed Room List Title";
  }

  showRoomList: boolean = true;

  hideRoomList() {

    this.showRoomList = false;
  }
}
