import { Component, inject, signal } from '@angular/core';
import { Vinyl } from '../../models/vinyl';
import { TableVinylsComponent } from '../table-vinyls/table-vinyls.component';
import { CreateVinylComponent } from '../create-vinyl/create-vinyl.component';
import { GetAllVinylsService } from '../../services/get-all-vinyls.service';

@Component({
  selector: 'tdu-list-vinyls',
  standalone: true,
  imports: [TableVinylsComponent, CreateVinylComponent],
  templateUrl: './list-vinyls.component.html',
  styleUrl: './list-vinyls.component.css',
})
export class ListVinylsComponent {
  private readonly service = inject(GetAllVinylsService);

  readyToCreate = signal<boolean>(false);

  vinylList: Vinyl[] = [
    { nom: 'ZZ Top - Eliminator', dateSortie: new Date() },
    { nom: 'Nirvana - Nervermind', dateSortie: new Date() },
    { nom: 'Black Sabbath - Paranoid', dateSortie: new Date() },
  ];

  prepareCreation(): void {
    this.readyToCreate.set(true);
  }
}
