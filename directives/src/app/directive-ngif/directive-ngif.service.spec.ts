/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DirectiveNgifService } from './directive-ngif.service';

describe('DirectiveNgifService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectiveNgifService]
    });
  });

  it('should ...', inject([DirectiveNgifService], (service: DirectiveNgifService) => {
    expect(service).toBeTruthy();
  }));
});
