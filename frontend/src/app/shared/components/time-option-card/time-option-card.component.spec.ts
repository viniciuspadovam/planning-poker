import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOptionCardComponent } from './time-option-card.component';

describe('TimeOptionCardComponent', () => {
  let component: TimeOptionCardComponent;
  let fixture: ComponentFixture<TimeOptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeOptionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeOptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
