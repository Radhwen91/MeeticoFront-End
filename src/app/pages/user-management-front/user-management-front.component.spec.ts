import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementFrontComponent } from './user-management-front.component';

describe('UserManagementFrontComponent', () => {
  let component: UserManagementFrontComponent;
  let fixture: ComponentFixture<UserManagementFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
