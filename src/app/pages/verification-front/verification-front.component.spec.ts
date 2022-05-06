import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationFrontComponent } from './verification-front.component';

describe('VerificationComponent', () => {
  let component: VerificationFrontComponent;
  let fixture: ComponentFixture<VerificationFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
