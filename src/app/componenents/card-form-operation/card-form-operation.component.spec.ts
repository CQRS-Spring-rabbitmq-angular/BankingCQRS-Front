import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormOperationComponent } from './card-form-operation.component';

describe('CardFormOperationComponent', () => {
  let component: CardFormOperationComponent;
  let fixture: ComponentFixture<CardFormOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFormOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
