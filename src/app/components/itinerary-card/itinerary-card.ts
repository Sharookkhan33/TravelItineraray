import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-itinerary-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './itinerary-card.html',
  styleUrls: ['./itinerary-card.css'],
  host: {
    class: 'block h-full'
  }
})
export class ItineraryCardComponent  {

  @Input() data: any;
  
   isAdded = false;
  constructor(private cartService: CartService) {}
    ngOnInit() {
    this.isAdded = this.cartService.isInCart(this.data.id);
  }

 addToCart() {
    if (this.isAdded) return;

    this.cartService.addToCart(this.data);
    this.isAdded = true;
  }
  toggleCompare() {
  this.data.isCompared = !this.data.isCompared;
}

}
