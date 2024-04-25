import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheStepSectionComponent } from './the-step-section.component';

describe('TheStepSectionComponent', () => {
  let component: TheStepSectionComponent;
  let fixture: ComponentFixture<TheStepSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheStepSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheStepSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
