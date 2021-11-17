import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBadgesComponent } from './personal-badges.component';

describe('PersonalBadgesComponent', () => {
  let component: PersonalBadgesComponent;
  let fixture: ComponentFixture<PersonalBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalBadgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
