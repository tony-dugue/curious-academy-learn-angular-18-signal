import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { vinylsRoutes } from './features/vinyls/vinyls.routes';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainComponent },
  //...vinylsRoutes
  { path: 'vinyls', children: vinylsRoutes }
];
