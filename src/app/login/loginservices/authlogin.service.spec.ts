import { TestBed } from '@angular/core/testing';

import { AuthloginService } from './authlogin.service';

describe('AuthloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthloginService = TestBed.get(AuthloginService);
    expect(service).toBeTruthy();
  });
});
