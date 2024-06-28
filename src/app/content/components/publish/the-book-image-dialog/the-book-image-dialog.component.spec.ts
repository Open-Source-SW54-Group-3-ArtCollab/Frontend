import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookImageDialogComponent } from './the-book-image-dialog.component';

describe('TheBookImageDialogComponent', () => {
  let component: TheBookImageDialogComponent;
  let fixture: ComponentFixture<TheBookImageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookImageDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBookImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
