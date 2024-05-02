import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {faEye, faHeart} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatButton} from "@angular/material/button";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {Book} from "../../../content/models/book.entity";
import {BookService} from "../../../content/service/book.service";

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

  books:Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getAll().subscribe((data: any) => {
      data.forEach((template: any) => {
        if (template.type === 'book') {
          const bookData = new Book(template.title, template.description, template.date_publish, template.type, template.id, template.imgUrl, template.likes, template.views, template.revenue, template.genre);
          this.books.push(bookData);
        }
      });
    });
    this.books = this.books.slice(0,3);
  }

}
