import { delay, filter, map, Observable, of } from 'rxjs';
import { Vinyls } from '../../models/vinyl';
import { GetAllVinyls } from '../get-all-vinyls.service';

export const fakeInMemoryGetAllVinylsService: GetAllVinyls = {
  getAll(): Observable<Vinyls> {
    const table: Vinyls = [
      { label: 'Radiohead - Ok Computer', releaseDate: new Date(2023, 1, 1) },
      {
        label: 'The Clash - London Calling',
        releaseDate: new Date(2023, 1, 1),
      },
      {
        label: 'Pink FLoyd - The Dark Side of the Moon',
        releaseDate: new Date(),
      },
    ];
    return of(table).pipe(
      filter((items) => items.length > 0),
      filter((items) => {
        const findingItems = items.find(
          (item) => item.releaseDate.getFullYear() == new Date().getFullYear()
        );
        return findingItems !== undefined;
      }),
      delay(1500),
      map((items) => {
        return items.filter(
          (item) => item.releaseDate.getFullYear() == new Date().getFullYear()
        );
      })
    );
  },
};
