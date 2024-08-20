import { Component, input, output } from '@angular/core';
import { Vinyl } from '../../models/vinyl';

@Component({
  selector: 'tdu-table-vinyls',
  standalone: true,
  imports: [],
  templateUrl: './table-vinyls.component.html',
  styleUrl: './table-vinyls.component.css',
})
export class TableVinylsComponent {
  items = input.required<Vinyl[]>();
  titre = input<string>('');

  toCreate = output<void>();

  clickToAddNewVinyl(): void {
    this.toCreate.emit();
  }
}
