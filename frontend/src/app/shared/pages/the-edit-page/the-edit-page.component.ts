import { Component } from '@angular/core';
import {TheBookEditComponent} from "../../components/the-book-edit/the-book-edit.component";
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";

@Component({
  selector: 'the-edit-page',
  standalone: true,
  imports: [
    TheBookEditComponent,
    NavbarContentComponent,
    FooterContentComponent
  ],
  templateUrl: './the-edit-page.component.html',
  styleUrl: './the-edit-page.component.css'
})
export class TheEditPageComponent {
}
