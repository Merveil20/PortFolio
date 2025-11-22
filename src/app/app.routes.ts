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
  {
    path: 'skill',
    loadComponent: () => import('./components/skill/skill'),
  },
  {
    path: 'project',
    loadComponent: () => import('./components/project/project'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact'),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
