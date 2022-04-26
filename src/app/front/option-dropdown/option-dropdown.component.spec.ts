import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionDropdownComponent } from './option-dropdown.component';

describe('OptionDropdownComponent', () => {
  let component: OptionDropdownComponent;
  let fixture: ComponentFixture<OptionDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
