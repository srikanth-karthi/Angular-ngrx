import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostomCounterInputComponent } from './costom-counter-input.component';

describe('CostomCounterInputComponent', () => {
  let component: CostomCounterInputComponent;
  let fixture: ComponentFixture<CostomCounterInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostomCounterInputComponent]
    });
    fixture = TestBed.createComponent(CostomCounterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
