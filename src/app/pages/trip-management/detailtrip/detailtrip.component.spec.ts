import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtripComponent } from './detailtrip.component';

describe('DetailtripComponent', () => {
  let component: DetailtripComponent;
  let fixture: ComponentFixture<DetailtripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailtripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailtripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
