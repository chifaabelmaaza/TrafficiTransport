import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaxiDriverComponent } from './add-taxi-driver.component';

describe('AddTaxiDriverComponent', () => {
  let component: AddTaxiDriverComponent;
  let fixture: ComponentFixture<AddTaxiDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTaxiDriverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTaxiDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
