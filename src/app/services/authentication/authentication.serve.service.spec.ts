import { TestBed } from '@angular/core/testing';

import { AuthenticationServeService } from './authentication.serve.service';

describe('AuthenticationServeService', () => {
  let service: AuthenticationServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
