import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusStationComponent } from './add-bus-station.component';

describe('AddBusStationComponent', () => {
  let component: AddBusStationComponent;
  let fixture: ComponentFixture<AddBusStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBusStationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBusStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
