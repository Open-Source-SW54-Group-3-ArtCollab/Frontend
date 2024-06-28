import {Component, OnInit} from '@angular/core';

import {RouterLink} from "@angular/router";
import {PaymentService} from "../../../../shared/service/payment.service";

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
