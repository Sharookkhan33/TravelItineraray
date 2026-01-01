import { Component , ChangeDetectorRef } from '@angular/core';
import { RouterOutlet, RouterLink,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'warning' | 'info';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
// Add this line to fix the TS2339 errors
  isMenuOpen = false; 

   toasts: Toast[] = [];
  private nextId = 0;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {
    this.cartService.cartUpdated$.subscribe((data) => {
      this.addToast(data.message, data.type);
    });
  }

  addToast(message: string, type: 'success' | 'warning' | 'info') {
    const id = this.nextId++;
    this.toasts.push({ id, message, type });
    this.cdr.detectChanges();

    // Auto-remove after 2.5 seconds
    setTimeout(() => {
      this.removeToast(id);
    }, 2500);
  }

  removeToast(id: number) {
    this.toasts = this.toasts.filter(t => t.id !== id);
    this.cdr.detectChanges();
  }


}
