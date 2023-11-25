import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardaUnoGuard } from './guarda-uno.guard';

describe('guardaUnoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardaUnoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
