import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookPublishInputComponent } from './the-book-publish-input.component';

describe('TheBookPublishInputComponent', () => {
  let component: TheBookPublishInputComponent;
  let fixture: ComponentFixture<TheBookPublishInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookPublishInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBookPublishInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
