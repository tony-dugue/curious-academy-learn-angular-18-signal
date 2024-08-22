import { HttpClient } from '@angular/common/http';
import { inject, Injectable, isDevMode } from '@angular/core';
import { Vinyls } from '../models/vinyl'
import { Observable } from 'rxjs';
import { GetAll } from '../../../core/tools/custom-types';
import { fakeInMemoryGetAllVinylsService } from './fakes';
import { environment } from '../../../../environments/environment.development';

export interface GetAllVinyls extends GetAll<Vinyls> {
  getAll(): Observable<Vinyls>;
}
@Injectable({ 
  providedIn: 'root',
  //useValue: fakeInMemoryGetAllVinylsService
  //useFactory: () => environment.isProduction ? new GetAllVinylsService() : fakeInMemoryGetAllVinylsService
  useFactory: () => isDevMode() ? fakeInMemoryGetAllVinylsService : new GetAllVinylsService()
})
export class GetAllVinylsService implements GetAllVinyls {
  private readonly httpClient = inject(HttpClient)

  getAll(): Observable<Vinyls> {
    throw new Error('Method not implemented')
  }
}
