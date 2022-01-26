import { TestBed } from '@angular/core/testing';

import { ProdudoroService } from './produdoro.service';

describe('ProdudoroService', () => {
  let service: ProdudoroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdudoroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
