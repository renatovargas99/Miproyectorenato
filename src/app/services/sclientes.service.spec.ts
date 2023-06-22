import { TestBed } from '@angular/core/testing';

import { SclientesService } from './sclientes.service';

describe('SclientesService', () => {
  let service: SclientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SclientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
