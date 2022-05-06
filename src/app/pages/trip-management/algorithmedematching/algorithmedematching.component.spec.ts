import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmedematchingComponent } from './algorithmedematching.component';

describe('AlgorithmedematchingComponent', () => {
  let component: AlgorithmedematchingComponent;
  let fixture: ComponentFixture<AlgorithmedematchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgorithmedematchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmedematchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
