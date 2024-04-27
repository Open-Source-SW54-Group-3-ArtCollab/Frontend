import { Component } from '@angular/core';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {MainPageBookCardsComponent} from "../main-page-book-cards/main-page-book-cards.component";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-the-main-page-popularity',
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    MainPageBookCardsComponent,
    FontAwesomeModule,
    NgForOf
  ],
  templateUrl: './the-main-page-popularity.component.html',
  styleUrl: './the-main-page-popularity.component.css'
})
export class TheMainPagePopularityComponent {

  genres = Array(3).fill({
    name: 'Genre'
  });

  protected readonly faChevronDown = faChevronDown;

  books = Array(3).fill({
    bookCover: 'https://picsum.photos/id/237/200/300',
    bookGenre: 'Genre',
    bookTitle: 'Book Title',
    bookWriter: 'Writer',
    bookIllustrator: 'Illustrator'
  });

  onGenreChange(genre: any) {
    console.log(genre);
  }
}
