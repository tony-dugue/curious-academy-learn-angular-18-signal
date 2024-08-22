import { delay, filter, map, Observable, of } from 'rxjs';
import { Vinyls } from '../../models/vinyl';
import { GetAllVinyls } from '../get-all-vinyls.service';

export const fakeInMemoryGetAllVinylsService: GetAllVinyls = {
  getAll(): Observable<Vinyls> {
    const table: Vinyls = [
      { nom: 'Radiohead - Ok Computer', dateSortie: new Date(2023, 1, 1) },
      { nom: 'The Clash - London Calling', dateSortie: new Date(2023, 1, 1) },
      { nom: 'Pink FLoyd - The Dark Side of the Moon', dateSortie: new Date() },
    ];
    return of(table).pipe(
      filter((items) => items.length > 0),
      filter((items) => {
        const findingItems = items.find((item) => item.dateSortie.getFullYear() == new Date().getFullYear());
        return findingItems !== undefined;
      }),
      delay(1500),
      map(items => {
        return items.filter(item => item.dateSortie.getFullYear() == new Date().getFullYear())
      })
    );
  },
};
