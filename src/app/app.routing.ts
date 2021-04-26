import { Routes } from '@angular/router';

/**
 * Components
 */
import { AppComponent } from './app.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: './roman-test/roman.module#RomanModule'
      }
    ]
  }
];
