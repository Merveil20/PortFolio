import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/header/header'),
  },
  {
    path: 'education',
    loadComponent: () => import('./components/education/education'),
  },
];
