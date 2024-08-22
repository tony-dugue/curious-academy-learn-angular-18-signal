import { Routes } from '@angular/router';
import { ListVinylsComponent } from './components/list-vinyls/list-vinyls.component';
import { CreateVinylComponent } from './components/create-vinyl/create-vinyl.component';

export const vinylsRoutes: Routes = [
  { path: '', component: ListVinylsComponent },
  { path: 'create', component: CreateVinylComponent },
];
