import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Vinyl } from '../../models/vinyl';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import {
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';
import 'moment/locale/fr';

@Component({
  selector: 'tdu-form-vinyl',
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    provideMomentDateAdapter(),
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
  ],
  templateUrl: './form-vinyl.component.html',
  styleUrl: './form-vinyl.component.css',
})
export class FormVinylComponent {
  inputIcon = signal('sentiment_very_satisfied');

  saveItem = output<Vinyl>();
  item: Vinyl = { nom: 'Test vinyl', releaseDate: new Date() };

  submitToSave(): void {
    this.saveItem.emit(this.item);
  }
}
