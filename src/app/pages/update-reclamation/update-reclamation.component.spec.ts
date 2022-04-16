import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReclamationComponent } from './update-reclamation.component';

describe('UpdateReclamationComponent', () => {
  let component: UpdateReclamationComponent;
  let fixture: ComponentFixture<UpdateReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
