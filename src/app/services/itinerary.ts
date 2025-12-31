import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ItineraryService {

  itineraries = [
    {
      id: 1,
      country: 'India',
      place: 'Kerala',
      food: 'Veg',
      activities: ['Boating', 'Trekking'],
      hotelType: '3 Star',
      nights: 3,
      flightCharges: 8000,
      totalCost: 25000
    }
  ];

  getItineraries() {
    return this.itineraries;
  }
}
