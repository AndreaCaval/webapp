import { TestBed } from '@angular/core/testing';

import { EditAnagraficService } from './edit-anagrafic.service';

describe('EditAnagraficService', () => {
  let service: EditAnagraficService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditAnagraficService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
