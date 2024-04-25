import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarContentComponent} from "./public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";
import {
  TheSubscriptionApplicationComponent
} from "./monetization/pages/the-subscription-application/the-subscription-application.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarContentComponent, FooterContentComponent, TheSubscriptionApplicationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
