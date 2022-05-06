import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdialogComponent } from './searchdialog.component';

describe('SearchdialogComponent', () => {
  let component: SearchdialogComponent;
  let fixture: ComponentFixture<SearchdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
