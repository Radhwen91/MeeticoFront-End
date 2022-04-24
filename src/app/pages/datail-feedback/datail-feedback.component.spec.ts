import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailFeedbackComponent } from './datail-feedback.component';

describe('DatailFeedbackComponent', () => {
  let component: DatailFeedbackComponent;
  let fixture: ComponentFixture<DatailFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
