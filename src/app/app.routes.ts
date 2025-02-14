import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async () =>
      (await import('./home/home.component')).HomeComponent,
  },
  {
    path: 'todos',
    pathMatch: 'full',
    loadComponent: async () =>
      (await import('./todos/todos.component')).TodosComponent,
  },
];
