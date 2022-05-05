import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsManagementComponent } from './alerts-management.component';

describe('AlertsManagementComponent', () => {
  let component: AlertsManagementComponent;
  let fixture: ComponentFixture<AlertsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
