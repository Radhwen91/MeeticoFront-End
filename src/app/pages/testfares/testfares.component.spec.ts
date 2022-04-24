import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestfaresComponent } from './testfares.component';

describe('TestfaresComponent', () => {
  let component: TestfaresComponent;
  let fixture: ComponentFixture<TestfaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestfaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestfaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
