import { TestBed } from '@angular/core/testing';

import { ImagenServiceService } from './imagen-service.service';

describe('ImagenServiceService', () => {
  let service: ImagenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
