import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Persons } from '../models';
import { environment } from '../../../../../environments/environment.development';

type OnePeopleApiReturn = {
  name: string;
  gender: string;
};

type PeopleApiReturn = {
  results: OnePeopleApiReturn[];
};

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private readonly httpClient = inject(HttpClient);

  getAll(pageIndex = 1): Observable<Persons> {
    // TODO: put this url in a config variable (maybe var env)
    return this.httpClient.get<PeopleApiReturn>(environment.apis.people).pipe(
      map((returnApi) => {
        return returnApi.results.map((item) => ({
          name: `${item.gender}. ${item.name}`,
        }));
      })
    );
  }
}
