import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookEditComponent } from './the-book-edit.component';

describe('TheBookEditComponent', () => {
  let component: TheBookEditComponent;
  let fixture: ComponentFixture<TheBookEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
