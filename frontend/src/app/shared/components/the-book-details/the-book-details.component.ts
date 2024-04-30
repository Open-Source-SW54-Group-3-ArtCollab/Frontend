import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {faEye, faHeart} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatButton} from "@angular/material/button";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-the-book-details',
  standalone: true,
  imports: [MatCardModule,
    FaIconComponent,
    MatButton,
    NgForOf,
    NgOptimizedImage],
  templateUrl: './the-book-details.component.html',
  styleUrl: './the-book-details.component.css'
})
export class TheBookDetailsComponent {

  protected readonly faHeart = faHeart;
  protected readonly faEye = faEye;

  books=[
    {cover:'https://m.media-amazon.com/images/I/81mUJVc1MkL._AC_UF1000,1000_QL80_DpWeblab_.jpg',
      title:'Boulevard',
      authors:'Flor M. Salvador / MMIvens',
      date_publish:'Actualizada abr. 02, 2024 10:11 AM',
      views:'33 M',
      likes:'15 M',},
    {cover:'https://m.media-amazon.com/images/I/81mUJVc1MkL._AC_UF1000,1000_QL80_DpWeblab_.jpg',
      title:'Boulevard',
      authors:'Flor M. Salvador / MMIvens',
      date_publish:'Actualizada abr. 02, 2024 10:11 AM',
      views:'33 M',
      likes:'15 M',},
  ]
}
