import { TestBed } from '@angular/core/testing';

import { AxiosRequestService } from './request-service.service';

describe('RequestServiceService', () => {
  let service: AxiosRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxiosRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
