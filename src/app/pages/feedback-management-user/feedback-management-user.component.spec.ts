import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackManagementUserComponent } from './feedback-management-user.component';

describe('FeedbackManagementUserComponent', () => {
  let component: FeedbackManagementUserComponent;
  let fixture: ComponentFixture<FeedbackManagementUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackManagementUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackManagementUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
