import { Component } from '@angular/core';
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";

@Component({
  selector: 'app-book-profile',
  standalone: true,
  imports: [
    NavbarContentComponent,
    FooterContentComponent
  ],
  templateUrl: './book-profile.component.html',
  styleUrl: './book-profile.component.css'
})
export class BookProfileComponent {

}
