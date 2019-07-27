import { TestBed } from '@angular/core/testing';

import { RxTxService } from './rx-tx.service';

describe('RxTxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxTxService = TestBed.get(RxTxService);
    expect(service).toBeTruthy();
  });
});
