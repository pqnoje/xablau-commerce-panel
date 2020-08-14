import { TestBed } from '@angular/core/testing';

import { TelzirService } from './telzir.service';

describe('TelzirService', () => {
  let service: TelzirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelzirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
