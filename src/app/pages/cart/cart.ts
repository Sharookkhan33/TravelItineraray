import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart implements OnInit {

  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCart();
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
    this.loadCart();
  }

  getTotalCost() {
    return this.cartItems.reduce(
      (total, item) => total + item.totalCost,
      0
    );
  }
}
