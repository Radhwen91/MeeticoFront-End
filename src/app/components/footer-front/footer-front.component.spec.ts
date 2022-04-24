import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFrontComponent } from './footer-front.component';

describe('FooterFrontComponent', () => {
  let component: FooterFrontComponent;
  let fixture: ComponentFixture<FooterFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
