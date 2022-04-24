import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReclamationComponent } from './detail-reclamation.component';

describe('DetailReclamationComponent', () => {
  let component: DetailReclamationComponent;
  let fixture: ComponentFixture<DetailReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailReclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
