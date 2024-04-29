import { Component } from '@angular/core';
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {
  TheBookDetailsEditTabviewComponent
} from "../../components/the-book-details-edit/the-book-details-edit-tabview/the-book-details-edit-tabview.component";
import {
  TheBookDetailsEditCoverComponent
} from "../../components/the-book-details-edit/the-book-details-edit-cover/the-book-details-edit-cover.component";

@Component({
  selector: 'book-details-edit-page',
  standalone: true,
  imports: [
    NavbarContentComponent,
    FooterContentComponent,
    TheBookDetailsEditTabviewComponent,
    TheBookDetailsEditCoverComponent
  ],
  templateUrl: './book-details-edit-page.component.html',
  styleUrl: './book-details-edit-page.component.css'
})
export class BookDetailsEditPageComponent {

}
