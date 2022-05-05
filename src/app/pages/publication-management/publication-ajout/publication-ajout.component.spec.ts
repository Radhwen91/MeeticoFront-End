import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationAjoutComponent } from './publication-ajout.component';

describe('PublicationAjoutComponent', () => {
  let component: PublicationAjoutComponent;
  let fixture: ComponentFixture<PublicationAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
