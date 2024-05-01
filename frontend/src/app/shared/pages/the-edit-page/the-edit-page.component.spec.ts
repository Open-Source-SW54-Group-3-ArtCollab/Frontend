import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheEditPageComponent } from './the-edit-page.component';

describe('TheEditPageComponent', () => {
  let component: TheEditPageComponent;
  let fixture: ComponentFixture<TheEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
