import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterbuttonsComponent } from './counterbuttons.component';

describe('CounterbuttonsComponent', () => {
  let component: CounterbuttonsComponent;
  let fixture: ComponentFixture<CounterbuttonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterbuttonsComponent]
    });
    fixture = TestBed.createComponent(CounterbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
