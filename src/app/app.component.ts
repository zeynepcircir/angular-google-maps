import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  display: any;
  myLatLng = { lat: 48.829677, lng: 2.239609 };

  markers: any[] = [];
  polygons: any[] = [];


  mapOptions: google.maps.MapOptions = {
    center: this.myLatLng,
    zoom: 10,
  };

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

}
