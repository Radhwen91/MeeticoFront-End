import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtripbackComponent } from './detailtripback.component';

describe('DetailtripbackComponent', () => {
  let component: DetailtripbackComponent;
  let fixture: ComponentFixture<DetailtripbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailtripbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailtripbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
