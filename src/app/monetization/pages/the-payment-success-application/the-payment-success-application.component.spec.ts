import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePaymentSuccessApplicationComponent } from './the-payment-success-application.component';

describe('ThePaymentSuccessApplicationComponent', () => {
  let component: ThePaymentSuccessApplicationComponent;
  let fixture: ComponentFixture<ThePaymentSuccessApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThePaymentSuccessApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThePaymentSuccessApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
