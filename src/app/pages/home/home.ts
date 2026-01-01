import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItineraryCardComponent } from '../../components/itinerary-card/itinerary-card';
import { ItineraryService } from '../../services/itinerary';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ItineraryCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {

  itineraries: any[] = [];
  filteredItineraries: any[] = [];
  destinations: string[] = [];

  constructor(private itineraryService: ItineraryService) {}

  ngOnInit(): void {
    this.itineraries = this.itineraryService.getItineraries();
    this.filteredItineraries = this.itineraries;

    this.destinations = Array.from(
      new Set(this.itineraries.map(i => i.place))
    );
  }

  // ✅ THIS METHOD MUST EXIST
  onDestinationChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;

    this.filteredItineraries = value
      ? this.itineraries.filter(i => i.place === value)
      : this.itineraries;
  }
  
}

