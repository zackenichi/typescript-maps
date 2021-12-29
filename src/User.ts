import faker from 'faker';
import { Pin } from './CustomMap';

export class User implements Pin {
  name: string;
  current: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.current =
      faker.address.cityName() + ', ' + faker.address.countryCode();
    this.location = {
      lat: parseFloat(faker.address.latitude(4.666, 21.1666)),
      lng: parseFloat(faker.address.longitude(116.66, 126.5666)),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h3> Subject: ${this.name}</h3>
    <p>${this.current}</p>
    </div>
    `;
  }
}
