import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePaymentFailureApplicationComponent } from './the-payment-failure-application.component';

describe('ThePaymentFailureApplicationComponent', () => {
  let component: ThePaymentFailureApplicationComponent;
  let fixture: ComponentFixture<ThePaymentFailureApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThePaymentFailureApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThePaymentFailureApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
