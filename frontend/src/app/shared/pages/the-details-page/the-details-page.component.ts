import { Component } from '@angular/core';
import {TheBookProfileComponent} from "../../../content/components/the-book-profile/the-book-profile.component";
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";

@Component({
  selector: 'the-details-page',
  standalone: true,
  imports: [
    TheBookProfileComponent,
    NavbarContentComponent,
    FooterContentComponent
  ],
  templateUrl: './the-details-page.component.html',
  styleUrl: './the-details-page.component.css'
})
export class TheDetailsPageComponent {

}
