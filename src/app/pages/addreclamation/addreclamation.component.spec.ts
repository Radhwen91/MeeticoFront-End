import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreclamationComponent } from './addreclamation.component';

describe('AddreclamationComponent', () => {
  let component: AddreclamationComponent;
  let fixture: ComponentFixture<AddreclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
