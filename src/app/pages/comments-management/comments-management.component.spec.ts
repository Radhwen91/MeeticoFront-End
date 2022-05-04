import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsManagementComponent } from './comments-management.component';

describe('CommentsManagementComponent', () => {
  let component: CommentsManagementComponent;
  let fixture: ComponentFixture<CommentsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
