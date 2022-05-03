import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFeedbackUserComponent } from './detail-feedback-user.component';

describe('DetailFeedbackComponent', () => {
  let component: DetailFeedbackUserComponent;
  let fixture: ComponentFixture<DetailFeedbackUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFeedbackUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFeedbackUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
