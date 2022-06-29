import { TestBed } from '@angular/core/testing';

import { QrappService } from './qrapp.service';

describe('QrappService', () => {
  let service: QrappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
