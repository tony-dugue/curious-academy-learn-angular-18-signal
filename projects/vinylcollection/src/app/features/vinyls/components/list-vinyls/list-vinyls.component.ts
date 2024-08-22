import { Component, inject, signal } from '@angular/core';
import { TableVinylsComponent } from '../table-vinyls/table-vinyls.component';
import { CreateVinylComponent } from '../create-vinyl/create-vinyl.component';
import { GetAllVinylsService } from '../../services/get-all-vinyls.service';
import { MainFiltersComponent } from '../main-filters/main-filters.component';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'tdu-list-vinyls',
  standalone: true,
  imports: [AsyncPipe, TableVinylsComponent, CreateVinylComponent, MainFiltersComponent],
  templateUrl: './list-vinyls.component.html',
  styleUrl: './list-vinyls.component.css',
})
export class ListVinylsComponent {
  private readonly service = inject(GetAllVinylsService);

  vinyls$ = this.service.getAll() // sans utiliser de Signal (ancienne méthode)
  vinyls$$ = toSignal(this.vinyls$) // avec signaux

  readyToCreate = signal<boolean>(false);

  //vinylList: Vinyl[] = [
  //  { nom: 'ZZ Top - Eliminator', dateSortie: new Date() },
  //  { nom: 'Nirvana - Nervermind', dateSortie: new Date() },
  //  { nom: 'Black Sabbath - Paranoid', dateSortie: new Date() },
  //];

  prepareCreation(): void {
    this.readyToCreate.set(true);
  }
}
