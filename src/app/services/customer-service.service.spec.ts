import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CustomerServiceService } from './customer-service.service';

describe('CustomerServiceService', () => {
  let service: CustomerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
    service = TestBed.inject(CustomerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
