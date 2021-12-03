import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeCardsComponent } from './badge-cards.component';

describe('BadgeCardsComponent', () => {
  let component: BadgeCardsComponent;
  let fixture: ComponentFixture<BadgeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
