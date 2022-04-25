import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePublicationComponent } from './update-publication.component';

describe('UpdatePublicationComponent', () => {
  let component: UpdatePublicationComponent;
  let fixture: ComponentFixture<UpdatePublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
