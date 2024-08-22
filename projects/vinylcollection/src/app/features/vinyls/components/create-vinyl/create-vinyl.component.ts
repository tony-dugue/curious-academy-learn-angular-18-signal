import { Component } from '@angular/core';
import { FormVinylComponent } from '../form-vinyl/form-vinyl.component';
import { Vinyl } from '../../models/vinyl';

@Component({
  selector: 'tdu-create-vinyl',
  standalone: true,
  imports: [FormVinylComponent],
  templateUrl: './create-vinyl.component.html',
  styleUrl: './create-vinyl.component.css'
})
export class CreateVinylComponent {
  saveOne(item: Vinyl): void {
    console.info('Je sauvegarde en bdd !!! : ', item)
  }
}
