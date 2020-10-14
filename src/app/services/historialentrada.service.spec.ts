import { TestBed } from '@angular/core/testing';

import { HistorialentradaService } from './historialentrada.service';

describe('HistorialentradaService', () => {
  let service: HistorialentradaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialentradaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
