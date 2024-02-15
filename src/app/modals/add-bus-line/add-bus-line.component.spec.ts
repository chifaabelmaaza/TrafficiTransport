import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusLineComponent } from './add-bus-line.component';

describe('AddBusLineComponent', () => {
  let component: AddBusLineComponent;
  let fixture: ComponentFixture<AddBusLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBusLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBusLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
