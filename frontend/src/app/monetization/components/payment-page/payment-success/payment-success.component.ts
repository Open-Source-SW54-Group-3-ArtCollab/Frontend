import {Component, OnInit} from '@angular/core';
import {PaymentService} from "../../../../shared/service/payment.service.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.css'
})
export class PaymentSuccessComponent implements OnInit{

  transactionId: string | null = null;

  constructor(private paymentService: PaymentService) { }

  ngOnInit(){
    this.transactionId=this.paymentService.transactionId;
  }
}
