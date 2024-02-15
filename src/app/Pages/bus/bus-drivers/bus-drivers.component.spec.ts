import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDriversComponent } from './bus-drivers.component';

describe('BusDriversComponent', () => {
  let component: BusDriversComponent;
  let fixture: ComponentFixture<BusDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusDriversComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
