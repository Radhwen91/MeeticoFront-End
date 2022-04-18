import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicationManagementComponent } from './publication-management.component';

describe('PublicationManagementComponent', () => {
  let component: PublicationManagementComponent;
  let fixture: ComponentFixture<PublicationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
