import { Component } from '@angular/core';
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {
    TheHeroSubscriptionComponent
} from "../../components/subscription-page/the-hero-subscription/the-hero-subscription.component";
import {
    TheStepSubscriptionComponent
} from "../../components/subscription-page/the-step-subscription/the-step-subscription.component";
import {
  PaymentInformationComponent
} from "../../components/payment-page/payment-information/payment-information.component";

@Component({
  selector: 'payment-application',
  standalone: true,
  imports: [
    FooterContentComponent,
    NavbarContentComponent,
    TheHeroSubscriptionComponent,
    TheStepSubscriptionComponent,
    PaymentInformationComponent
  ],
  templateUrl: './the-payment-application.component.html',
  styleUrl: './the-payment-application.component.css'
})
export class ThePaymentApplicationComponent {

}
