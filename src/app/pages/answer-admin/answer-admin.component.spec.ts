import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerAdminComponent } from './answer-admin.component';

describe('AnswerAdminComponent', () => {
  let component: AnswerAdminComponent;
  let fixture: ComponentFixture<AnswerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
