import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFeedbackComponent } from './update-feedback.component';

describe('UpdateFeedbackComponent', () => {
  let component: UpdateFeedbackComponent;
  let fixture: ComponentFixture<UpdateFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
