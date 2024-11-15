import { TestBed } from '@angular/core/testing';

import { SubmitInformationService } from './submit-information.service';

describe('SubmitInformationService', () => {
  let service: SubmitInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
