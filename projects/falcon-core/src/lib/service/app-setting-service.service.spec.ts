import { TestBed } from '@angular/core/testing';

import { AppSettingServiceService } from './app-setting-service.service';

describe('AppSettingServiceService', () => {
  let service: AppSettingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppSettingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
