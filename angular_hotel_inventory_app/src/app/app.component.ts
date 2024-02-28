import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef, viewChild } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit {  

  title = 'Laro Puti Hotel';
  role = 'Admin';

  //@ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = "Hilton Hotel";
  }

  ngAfterViewInit(): void {
    //const componentRef = this.vcr.createComponent(RoomsComponent);
    //componentRef.instance.rooms.totalRooms = 50;
  }
}
