import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {faEye, faHeart, faLock} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-the-book-details',
  standalone: true,
  imports: [MatCardModule,
    FaIconComponent,
    MatButton],
  templateUrl: './the-book-details.component.html',
  styleUrl: './the-book-details.component.css'
})
export class TheBookDetailsComponent {

  protected readonly faLock = faLock;
  protected readonly faHeart = faHeart;
  protected readonly faEye = faEye;

  books=[
    {cover:'https://m.media-amazon.com/images/I/81mUJVc1MkL._AC_UF1000,1000_QL80_DpWeblab_.jpg',
      title:'Boulevard',
      authors:'Flor M. Salvador / MMIvens',
      date:'Actualizada abr. 02, 2024 10:11 AM',
      views:'33 M',
      likes:'15 M',}
  ]

}
