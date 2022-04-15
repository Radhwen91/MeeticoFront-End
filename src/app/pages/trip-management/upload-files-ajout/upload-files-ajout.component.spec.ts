import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilesAjoutComponent } from './upload-files-ajout.component';

describe('UploadFilesAjoutComponent', () => {
  let component: UploadFilesAjoutComponent;
  let fixture: ComponentFixture<UploadFilesAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFilesAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilesAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
