import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {PaymentService} from "../../../../shared/service/payment.service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'payment-information',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './payment-information.component.html',
  styleUrl: './payment-information.component.css'
})

export class PaymentInformationComponent implements OnInit {

  subscription: { type_subscription: string; amount: string; benefits: string[] } | null = null;
  @ViewChild('paymentRef', {static: true}) paymentRef!: ElementRef;

  constructor(private router:Router ,private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.currentSubscription.subscribe(subscription => this.subscription = subscription);
    window.paypal.Buttons(
      {
        createOrder: (data: any, actions: any) => {
          const amount = this.subscription?.amount.replace('S/.', '');
          console.log(amount);
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount
                },
              },
            ],
          });
        },
        onApprove: async (data: any, actions: any) => {
          return actions.order.capture().then((order: any) => {
            if (order.status === 'COMPLETED') {
              this.paymentService.transactionId = order.id;
              this.router.navigate(['/payment-success']).then(r => console.log(r));
            }
            console.log(order);
          });
        },
        onError: (err: any) => {
          this.router.navigate(['/payment-failure']).then(r => console.log(r));
          console.log(err);

        },
      }
    ).render(this.paymentRef.nativeElement);
  }
}
