import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}
    ngOnInit(): void {}
    display: any;
    center: google.maps.LatLngLiteral = {
      lat: 22.2736308,
      lng: 70.7512555
  };
  zoom = 6;
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }
   
    mapOptions: google.maps.MapOptions = {
      center: { lat: 38.9987208, lng: -77.2538699 },
      zoom: 14,
      mapTypeId:google.maps.MapTypeId.TERRAIN
    }
    marker = {
      position: { lat: 39.963985, lng: 32.792914 },
   }
}

