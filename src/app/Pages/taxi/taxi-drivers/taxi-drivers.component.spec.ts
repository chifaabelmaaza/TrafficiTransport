import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiDriversComponent } from './taxi-drivers.component';

describe('TaxiDriversComponent', () => {
  let component: TaxiDriversComponent;
  let fixture: ComponentFixture<TaxiDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxiDriversComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxiDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
