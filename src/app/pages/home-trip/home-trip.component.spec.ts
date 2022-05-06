import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTripComponent } from './home-trip.component';

describe('HomeTripComponent', () => {
  let component: HomeTripComponent;
  let fixture: ComponentFixture<HomeTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
