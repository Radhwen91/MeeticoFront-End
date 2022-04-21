import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfeedbackComponent } from './addfeedback.component';

describe('AddfeedbackComponent', () => {
  let component: AddfeedbackComponent;
  let fixture: ComponentFixture<AddfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
