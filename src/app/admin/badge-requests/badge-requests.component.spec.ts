import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeRequestsComponent } from './badge-requests.component';

describe('BadgeRequestsComponent', () => {
  let component: BadgeRequestsComponent;
  let fixture: ComponentFixture<BadgeRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
