import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'the-book-details-edit-cover',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './the-book-details-edit-cover.component.html',
  styleUrl: './the-book-details-edit-cover.component.css'
})
export class TheBookDetailsEditCoverComponent {
  books=[
    {cover:'https://m.media-amazon.com/images/I/81mUJVc1MkL._AC_UF1000,1000_QL80_DpWeblab_.jpg',
      title:'Boulevard',
      authors:'Flor M. Salvador / MMIvens',
      date:'Actualizada abr. 02, 2024 10:11 AM',
      views:'33 M',
      likes:'15 M',}
  ]
}
