import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { vinylsRoutes } from './features/vinyls/vinyls.routes';
import { vinylCategoriesRoutes } from './features/vinyl-categories/vinyl-categories.routes';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainComponent },
  { path: 'vinyls', children: vinylsRoutes },
  { path: 'vinyl-categories', children: vinylCategoriesRoutes },
];
