import { TestBed } from '@angular/core/testing';

import { LatestmatchsService } from './latestmatchs.service';

describe('LatestmatchsService', () => {
  let service: LatestmatchsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestmatchsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
