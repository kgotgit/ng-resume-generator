import { TestBed } from '@angular/core/testing';

import { DynaFacadeService } from './dyna-facade.service';

describe('DynaFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynaFacadeService = TestBed.get(DynaFacadeService);
    expect(service).toBeTruthy();
  });
});
