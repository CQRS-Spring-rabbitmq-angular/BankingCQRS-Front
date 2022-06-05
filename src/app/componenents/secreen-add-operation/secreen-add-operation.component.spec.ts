import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecreenAddOperationComponent } from './secreen-add-operation.component';

describe('SecreenAddOperationComponent', () => {
  let component: SecreenAddOperationComponent;
  let fixture: ComponentFixture<SecreenAddOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecreenAddOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecreenAddOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
