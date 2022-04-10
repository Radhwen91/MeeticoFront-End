import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationManagementComponent } from './reclamation-management.component';

describe('ReclamationManagementComponent', () => {
  let component: ReclamationManagementComponent;
  let fixture: ComponentFixture<ReclamationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
