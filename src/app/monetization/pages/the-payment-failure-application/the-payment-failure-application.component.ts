import { Component } from '@angular/core';
import {PaymentFailureComponent} from "../../components/payment-page/payment-failure/payment-failure.component";
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";

@Component({
  selector: 'payment-failure',
  standalone: true,
  imports: [
    PaymentFailureComponent,
    NavbarContentComponent,
    FooterContentComponent
  ],
  templateUrl: './the-payment-failure-application.component.html',
  styleUrl: './the-payment-failure-application.component.css'
})
export class ThePaymentFailureApplicationComponent {

}
