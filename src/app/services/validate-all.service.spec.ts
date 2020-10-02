import { TestBed } from '@angular/core/testing';

import { ValidateAllService } from './validate-all.service';

describe('ValidateAllService', () => {
  let service: ValidateAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
