import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionCardSelectComponent } from './option-card-select.component';

describe('OptionCardSelectComponent', () => {
  let component: OptionCardSelectComponent;
  let fixture: ComponentFixture<OptionCardSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionCardSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionCardSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
