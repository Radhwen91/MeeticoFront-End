import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackManagementComponent } from './feedback-management.component';

describe('FeedbackManagementComponent', () => {
  let component: FeedbackManagementComponent;
  let fixture: ComponentFixture<FeedbackManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
