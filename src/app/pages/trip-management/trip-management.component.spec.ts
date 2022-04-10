import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripManagementComponent } from './trip-management.component';

describe('TripManagementComponent', () => {
  let component: TripManagementComponent;
  let fixture: ComponentFixture<TripManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
