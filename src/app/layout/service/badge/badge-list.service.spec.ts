import { TestBed } from '@angular/core/testing';

import { BadgeListService } from './badge-list.service';

describe('BadgeListService', () => {
  let service: BadgeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadgeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
