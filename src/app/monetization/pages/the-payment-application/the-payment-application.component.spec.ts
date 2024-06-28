import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePaymentApplicationComponent } from './the-payment-application.component';

describe('ThePaymentApplicationComponent', () => {
  let component: ThePaymentApplicationComponent;
  let fixture: ComponentFixture<ThePaymentApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThePaymentApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThePaymentApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
