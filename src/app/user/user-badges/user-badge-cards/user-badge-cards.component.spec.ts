import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBadgeCardsComponent } from './user-badge-cards.component';

describe('UserBadgeCardsComponent', () => {
  let component: UserBadgeCardsComponent;
  let fixture: ComponentFixture<UserBadgeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBadgeCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBadgeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
