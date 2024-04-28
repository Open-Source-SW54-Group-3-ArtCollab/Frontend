import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookPublishSelectComponent } from './the-book-publish-select.component';

describe('BookPublishSelectComponent', () => {
  let component: TheBookPublishSelectComponent;
  let fixture: ComponentFixture<TheBookPublishSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookPublishSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheBookPublishSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
