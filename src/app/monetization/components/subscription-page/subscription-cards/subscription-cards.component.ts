import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import { FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import{faCheck} from "@fortawesome/free-solid-svg-icons";
import {NgForOf} from "@angular/common";

import {Router} from "@angular/router";
import {PaymentService} from "../../../../shared/service/payment.service";

@Component({
  selector: 'subscription-cards',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard,
    MatCardHeader,
    FontAwesomeModule,
    NgForOf
  ],
  templateUrl: './subscription-cards.component.html',
  styleUrl: './subscription-cards.component.css'
})
export class SubscriptionCardsComponent implements OnInit{
  faCheck = faCheck;
  subscriptions: {type_subscription: string, amount: string, benefits:string[]}[] = [];

  constructor(private router:Router, private paymentService: PaymentService) { }

  ngOnInit() {
    this.subscriptions = [
      {type_subscription: 'Artista', amount: 'S/.3.99', benefits: [
          'Perfil destacado al inicio de la sección',
          'Tener mayor prioridad para trabajar con escritores destacados'
        ]},
      {type_subscription: 'Lector', amount: 'S/.5.90', benefits: [
          'Un paquete mensual gratuito de monedas',
          'Acceso anticipado a nuevas historias',
          'Sin anuncios'
        ]},
      {type_subscription: 'Escritor', amount: 'S/.7.99', benefits: [
          'Historia destacada en la página principal',
          'Anuncios de su historia en nuestras páginas',
          'Entrar en nuestra lista de historias recomendadas a editoriales'
        ]},
    ];
    this.paymentService.changeSubscriptions(this.subscriptions);
  }
  subscribe(subscription: {type_subscription: string, amount: string, benefits:string[]}) {
    this.paymentService.changeCurrentSubscription(subscription);
    this.router.navigate(['/payment-information']).then(r => console.log(r));
  }

}
