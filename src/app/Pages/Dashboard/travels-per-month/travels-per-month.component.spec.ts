import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsPerMonthComponent } from './travels-per-month.component';

describe('TravelsPerMonthComponent', () => {
  let component: TravelsPerMonthComponent;
  let fixture: ComponentFixture<TravelsPerMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelsPerMonthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelsPerMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
