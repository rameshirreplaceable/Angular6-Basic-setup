import { TestBed, inject } from '@angular/core/testing';

import { ApiConstantService } from './api-constant.service';

describe('ApiConstantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiConstantService]
    });
  });

  it('should be created', inject([ApiConstantService], (service: ApiConstantService) => {
    expect(service).toBeTruthy();
  }));
});
