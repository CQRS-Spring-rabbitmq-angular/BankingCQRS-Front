import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfileAccountComponent } from './card-profile-account.component';

describe('CardProfileAccountComponent', () => {
  let component: CardProfileAccountComponent;
  let fixture: ComponentFixture<CardProfileAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProfileAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProfileAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
