import { TestBed } from '@angular/core/testing';

import { TeclojaService } from './tecloja.service';

describe('TeclojaService', () => {
  let service: TeclojaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeclojaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
