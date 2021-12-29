/// <reference types="@types/google.maps" />

// Instructions to other classes
// on how they can be an argument to addMarker
export interface Pin {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 6,
      center: {
        lat: 12.8797,
        lng: 121.774,
      },
    });
  }

  addMarker(pin: Pin): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: pin.location.lat,
        lng: pin.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: pin.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
