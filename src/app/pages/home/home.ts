import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItineraryService } from '../../services/itinerary';
import { ItineraryCard } from '../../components/itinerary-card/itinerary-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ItineraryCard],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  itineraries: any[] = [];

  constructor(private itineraryService: ItineraryService) {}

  ngOnInit() {
    this.itineraries = this.itineraryService.getItineraries();
  }
}
