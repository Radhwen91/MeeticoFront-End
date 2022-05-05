import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuiltripbackComponent } from './acceuiltripback.component';

describe('AcceuiltripbackComponent', () => {
  let component: AcceuiltripbackComponent;
  let fixture: ComponentFixture<AcceuiltripbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuiltripbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuiltripbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
