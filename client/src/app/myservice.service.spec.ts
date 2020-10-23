import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { MyserviceService } from './myservice.service';

describe('MyserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [MyserviceService]
    });
  });

  it('should be created', inject([MyserviceService], (service: MyserviceService) => {
    expect(service).toBeTruthy();
  }));
});
