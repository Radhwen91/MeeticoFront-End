import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkSideNavComponent } from './network-side-nav.component';

describe('NetworkSideNavComponent', () => {
  let component: NetworkSideNavComponent;
  let fixture: ComponentFixture<NetworkSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
