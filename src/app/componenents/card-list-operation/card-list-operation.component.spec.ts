import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListOperationComponent } from './card-list-operation.component';

describe('CardListOperationComponent', () => {
  let component: CardListOperationComponent;
  let fixture: ComponentFixture<CardListOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
