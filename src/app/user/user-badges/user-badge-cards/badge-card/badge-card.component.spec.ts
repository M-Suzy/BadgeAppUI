import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeCardComponent } from './badge-card.component';

describe('BadgeCardComponent', () => {
  let component: BadgeCardComponent;
  let fixture: ComponentFixture<BadgeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
