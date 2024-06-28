import { Component } from '@angular/core';
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {PaymentSuccessComponent} from "../../components/payment-page/payment-success/payment-success.component";

@Component({
  selector: 'payment-success',
  standalone: true,
  imports: [
    NavbarContentComponent,
    FooterContentComponent,
    PaymentSuccessComponent
  ],
  templateUrl: './the-payment-success-application.component.html',
  styleUrl: './the-payment-success-application.component.css'
})
export class ThePaymentSuccessApplicationComponent {

}
