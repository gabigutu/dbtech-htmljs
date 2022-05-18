import { TestBed } from '@angular/core/testing';

import { FetchRequestService } from './fetch-service.service';

describe('FetchServiceService', () => {
  let service: FetchRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
