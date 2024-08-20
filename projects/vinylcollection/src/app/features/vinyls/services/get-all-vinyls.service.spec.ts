import { TestBed } from '@angular/core/testing';

import { GetAllVinylsService } from './get-all-vinyls.service';

describe('GetAllVinylsService', () => {
  let service: GetAllVinylsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllVinylsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
