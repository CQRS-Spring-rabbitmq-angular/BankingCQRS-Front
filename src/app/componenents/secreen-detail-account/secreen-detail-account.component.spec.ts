import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecreenDetailAccountComponent } from './secreen-detail-account.component';

describe('SecreenDetailAccountComponent', () => {
  let component: SecreenDetailAccountComponent;
  let fixture: ComponentFixture<SecreenDetailAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecreenDetailAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecreenDetailAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
