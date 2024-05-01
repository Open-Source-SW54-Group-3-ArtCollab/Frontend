import {Component, OnInit} from '@angular/core';
import {Book} from "../../../model/book.entity";
import {BookService} from "../../../service/book.service";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'book-popular',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './book-popular.component.html',
  styleUrl: './book-popular.component.css'
})
export class BookPopularComponent implements OnInit{

  books: any[] = [];
  booksGroup: any[] = [];
  bookData: any= null;
  ngOnInit(): void {
    this.getBooks();
  }

  constructor(private bookService: BookService) {}

  getBooks(){
    this.bookService.getAll().subscribe((data:any) => {
      data.forEach((template:any) => {
        if(template.type === 'book'){
          this.bookData = new Book(template.title, template.description,template.date_publish, template.type, template.id, template.imgUrl, template.likes, template.views, template.revenue);
          this.books.push(this.bookData);
          this.booksGroup.push(this.bookData);
        }
      });
    });
    let randomIndex = Math.floor(Math.random() * this.books.length);
    this.books = this.books.slice(randomIndex, randomIndex + 4);
  }

}
