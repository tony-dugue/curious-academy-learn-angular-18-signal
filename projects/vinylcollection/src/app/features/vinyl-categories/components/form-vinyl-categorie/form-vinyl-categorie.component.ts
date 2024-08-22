import { Component, inject, input, OnInit, output, SimpleChanges } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { tap } from 'rxjs';
import { VinylCategory } from '../../models';

@Component({
  selector: 'tdu-form-vinyl-categorie',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './form-vinyl-categorie.component.html',
  styleUrl: './form-vinyl-categorie.component.css',
})
export class FormVinylCategorieComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);

  toSave = output<Partial<VinylCategory>>();

  item = input.required<VinylCategory>()

  vinylCategoryForm = this.formBuilder.group({
    label: ['', [Validators.required, Validators.minLength(3)]],
    type: [''],
  });

  private fromDetectChanges$ = this.vinylCategoryForm.valueChanges.pipe(
    tap((item) => console.info('changement : ', item))
  );

  ngOnChanges(changes: SimpleChanges): void {
    const newItem = changes['item'].currentValue
    this.vinylCategoryForm.setValue(newItem)
  }

  ngOnInit(): void {
    this.fromDetectChanges$.subscribe();
  }

  submitToSave(): void {
    var result = this.vinylCategoryForm.value;

    if (result.label && result.type) {
      this.toSave.emit(result as VinylCategory);
      // attention, avec le as, ici on ne controle plus si c'est nullable !!!
    }
  }
}
