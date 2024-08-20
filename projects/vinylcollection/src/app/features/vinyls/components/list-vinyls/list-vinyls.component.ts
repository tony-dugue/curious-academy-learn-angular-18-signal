import { Component } from '@angular/core';
import { Vinyl } from '../../models/vinyl';
import { TableVinylsComponent } from '../table-vinyls/table-vinyls.component';

@Component({
  selector: 'tdu-list-vinyls',
  standalone: true,
  imports: [TableVinylsComponent],
  templateUrl: './list-vinyls.component.html',
  styleUrl: './list-vinyls.component.css',
})
export class ListVinylsComponent {
  vinylList: Vinyl[] = [
    { nom: 'ZZ Top - Eliminator', dateSortie: new Date() },
    { nom: 'Nirvana - Nervermind', dateSortie: new Date() },
    { nom: 'Black Sabbath - Paranoid', dateSortie: new Date() },
  ];

  prepareCreation(): void {
    console.log('Prêt !')
  }
}



