import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePublicationBackComponent } from './update-publication-back.component';

describe('UpdatePublicationBackComponent', () => {
  let component: UpdatePublicationBackComponent;
  let fixture: ComponentFixture<UpdatePublicationBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePublicationBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePublicationBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
