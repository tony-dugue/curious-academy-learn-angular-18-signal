import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { VinylCategory } from '../models';
import { delay, Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
  useValue: {
    add(item: VinylCategory): Observable<VinylCategory> {
      item.id = Math.random();
      return of(item).pipe(delay(1500));
    },
  },
})
export class AddOneVinylCategoryService {
  private readonly http = inject(HttpClient);

  add(item: VinylCategory): Observable<VinylCategory> {
    return this.http.post<VinylCategory>(
      environment.apis.vinylCategorie,
      item
    );
  }
}