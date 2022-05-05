import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommentsBackComponent } from './list-comments-back.component';

describe('ListCommentsBackComponent', () => {
  let component: ListCommentsBackComponent;
  let fixture: ComponentFixture<ListCommentsBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCommentsBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommentsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
