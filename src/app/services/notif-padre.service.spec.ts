import { TestBed } from '@angular/core/testing';

import { NotifPadreService } from './notif-padre.service';

describe('NotifPadreService', () => {
  let service: NotifPadreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifPadreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
