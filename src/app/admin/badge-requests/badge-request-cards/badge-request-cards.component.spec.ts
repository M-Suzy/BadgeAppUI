import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeRequestCardsComponent } from './badge-request-cards.component';

describe('BadgeRequestCardsComponent', () => {
  let component: BadgeRequestCardsComponent;
  let fixture: ComponentFixture<BadgeRequestCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeRequestCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeRequestCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
