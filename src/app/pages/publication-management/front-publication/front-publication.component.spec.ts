import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPublicationComponent } from './front-publication.component';

describe('FrontPublicationComponent', () => {
  let component: FrontPublicationComponent;
  let fixture: ComponentFixture<FrontPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontPublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
