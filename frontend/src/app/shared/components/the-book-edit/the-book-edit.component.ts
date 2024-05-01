import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'the-book-edit',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './the-book-edit.component.html',
  styleUrl: './the-book-edit.component.css'
})
export class TheBookEditComponent {

  books=[
    {cover:'https://m.media-amazon.com/images/I/81mUJVc1MkL._AC_UF1000,1000_QL80_DpWeblab_.jpg',
      title:'Boulevard'
    }
  ]
  protected readonly faArrowLeft = faArrowLeft;
}
