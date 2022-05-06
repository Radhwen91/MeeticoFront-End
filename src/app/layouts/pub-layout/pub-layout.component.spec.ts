import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {PubLayoutComponent } from './pub-layout.component';

describe('PubLayoutComponent', () => {
  let component: PubLayoutComponent;
  let fixture: ComponentFixture<PubLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
