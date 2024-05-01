import { Component } from '@angular/core';
import { NavbarContentComponent } from "../../../public/components/navbar-content/navbar-content.component";
import { FooterContentComponent } from "../../../public/components/footer-content/footer-content.component";
import { TheUserEditAccountComponent } from "../../components/the-user-edit-account/the-user-edit-account.component";

@Component({
  selector: 'app-the-user-edit-account',
  standalone: true,
  imports: [
    NavbarContentComponent,
    FooterContentComponent,
  ],
  templateUrl: './the-user-edit-account.component.html',
  styleUrl: './the-user-edit-account.component.css'
})
export class TheUserEditAccountComponent {

}