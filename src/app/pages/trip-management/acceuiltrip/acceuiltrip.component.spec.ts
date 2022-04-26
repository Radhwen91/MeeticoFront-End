import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuiltripComponent } from './acceuiltrip.component';

describe('AcceuiltripComponent', () => {
  let component: AcceuiltripComponent;
  let fixture: ComponentFixture<AcceuiltripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuiltripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuiltripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
