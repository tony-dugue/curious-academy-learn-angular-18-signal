import { Component, inject, signal } from '@angular/core';
import { FormVinylComponent } from '../form-vinyl/form-vinyl.component';
import { Vinyl } from '../../models/vinyl';
import { SaveOneVinylService } from '../../services/save-one-vinyl.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

type StatePanel = 'success' | 'failed';
@Component({
  selector: 'tdu-create-vinyl',
  standalone: true,
  imports: [FormVinylComponent, MatProgressSpinnerModule],
  templateUrl: './create-vinyl.component.html',
  styleUrl: './create-vinyl.component.css',
})
export class CreateVinylComponent {
  private readonly service = inject(SaveOneVinylService);
  private readonly snackbar = inject(MatSnackBar);

  isSaving = signal(false);

  openSnack(message: string, cssClass: StatePanel) {
    this.snackbar.open(message, '', { duration: 1000, panelClass: cssClass });
  }

  saveOne(item: Vinyl): void {
    this.isSaving.set(true);
    this.service.save(item).subscribe({
      next: (savedVinyl) => {
        this.openSnack('Sauvegarde réussie !', 'success');
        this.isSaving.set(false);
      },
      error: (err) => {
        this.openSnack(
          'Oops, une erreur est survenue lors de la sauvegarde !',
          'failed'
        );
        this.isSaving.set(false);
      },
    });
  }
}
