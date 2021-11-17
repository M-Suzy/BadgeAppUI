import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedBadgesComponent } from './requested-badges.component';

describe('RequestedBadgesComponent', () => {
  let component: RequestedBadgesComponent;
  let fixture: ComponentFixture<RequestedBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedBadgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
