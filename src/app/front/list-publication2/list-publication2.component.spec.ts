import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPublication2Component } from './list-publication2.component';

describe('ListPublication2Component', () => {
  let component: ListPublication2Component;
  let fixture: ComponentFixture<ListPublication2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPublication2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPublication2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
