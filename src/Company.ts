import faker from 'faker';
import { Pin } from './CustomMap';

export class Company implements Pin {
  companyName: string;
  catchPhase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude(4.666, 21.1666)),
      lng: parseFloat(faker.address.longitude(116.66, 126.5666)),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h2> ${this.companyName} </h2> 
     <i>"${this.catchPhase}"</i>
     </div>
    `;
  }
}
