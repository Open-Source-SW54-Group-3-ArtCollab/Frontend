import { Component } from '@angular/core';
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";

@Component({
  selector: 'app-ilustrator-profile-edit',
  standalone: true,
  imports: [
    NavbarContentComponent,
    FooterContentComponent
  ],
  templateUrl: './ilustrator-profile-edit.component.html',
  styleUrl: './ilustrator-profile-edit.component.css'
})
export class IlustratorProfileEditComponent {

}
