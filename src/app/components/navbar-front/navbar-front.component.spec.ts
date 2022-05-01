import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFrontComponent } from './navbar-front.component';

describe('NavbarFrontComponent', () => {
  let component: NavbarFrontComponent;
  let fixture: ComponentFixture<NavbarFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
