import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommentsFront2Component } from './list-comments-front2.component';

describe('ListCommentsFront2Component', () => {
  let component: ListCommentsFront2Component;
  let fixture: ComponentFixture<ListCommentsFront2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCommentsFront2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommentsFront2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
