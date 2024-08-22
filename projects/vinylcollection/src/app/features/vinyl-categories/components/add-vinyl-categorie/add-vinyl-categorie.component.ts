import { Component, inject, signal } from '@angular/core';
import { FormVinylCategorieComponent } from '../form-vinyl-categorie/form-vinyl-categorie.component';
import { VinylCategory } from '../../models';
import { AddOneVinylCategoryService } from '../../services/add-one-vinyl-category.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StatePanel } from '../../../../core/tools/custom-types';

@Component({
  selector: 'tdu-add-vinyl-categorie',
  standalone: true,
  imports: [FormVinylCategorieComponent, MatProgressSpinnerModule],
  templateUrl: './add-vinyl-categorie.component.html',
  styleUrl: './add-vinyl-categorie.component.css',
})
export class AddVinylCategorieComponent {
  private readonly business = inject(AddOneVinylCategoryService);
  private readonly snackbar = inject(MatSnackBar);

  isSaving = signal(false);
  newItem: VinylCategory = { label: '', type: '' };

  openSnack(message: string, cssClass: StatePanel) {
    this.snackbar.open(message, '', { duration: 1000, panelClass: cssClass });
  }

  createOne(item: VinylCategory): void {
    this.isSaving.set(true);
    this.business.add(item).subscribe({
      next: (item) => {
        this.openSnack('Sauvegarde réussie !', 'success');
        this.isSaving.set(false);
        this.newItem = { label: '', type: '' };
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
