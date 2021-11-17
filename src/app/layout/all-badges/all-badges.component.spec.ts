import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBadgesComponent } from './all-badges.component';

describe('AllBadgesComponent', () => {
  let component: AllBadgesComponent;
  let fixture: ComponentFixture<AllBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBadgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
