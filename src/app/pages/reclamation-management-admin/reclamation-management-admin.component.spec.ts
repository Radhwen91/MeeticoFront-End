import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationManagementAdminComponent } from './reclamation-management-admin.component';

describe('ReclamationManagementAdminComponent', () => {
  let component: ReclamationManagementAdminComponent;
  let fixture: ComponentFixture<ReclamationManagementAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationManagementAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationManagementAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
