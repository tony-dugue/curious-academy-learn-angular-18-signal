import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vinyl } from '../models/vinyl';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SaveOneVinylService {
  private readonly http = inject(HttpClient);

  save(item: Vinyl): Observable<Vinyl> {
    return this.http.post<Vinyl>('', item)
  }
}
