import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: Cart }
];
