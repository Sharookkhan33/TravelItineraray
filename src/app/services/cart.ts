import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {

  cartUpdated$ = new Subject<{ message: string; type: 'success' | 'warning' | 'info' }>();

  getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  addToCart(item: any) {
    const cart = this.getCart();
    const exists = cart.some((i: any) => i.id === item.id);

    if (!exists) {
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));

      this.cartUpdated$.next({
        message: 'Added to cart successfully',
        type: 'success'
      });

    } else {
      this.cartUpdated$.next({
        message: 'Item already exists in cart',
        type: 'warning'
      });
    }
  }

  removeFromCart(id: number) {
    const cart = this.getCart().filter((item: any) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Trigger removed popup
    this.cartUpdated$.next({
      message: 'Item removed from cart',
      type: 'info'
    });
  }
  isInCart(id: number): boolean {
  const cart = this.getCart();
  return cart.some((item: any) => item.id === id);
}

}
