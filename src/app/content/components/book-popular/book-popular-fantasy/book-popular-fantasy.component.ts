import {Component, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {BookService} from "../../../service/book.service";
import {Book} from "../../../model/book.entity";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'book-popular-fantasy',
  standalone: true,
    imports: [
        FaIconComponent
    ],
  templateUrl: './book-popular-fantasy.component.html',
  styleUrl: './book-popular-fantasy.component.css'
})
export class BookPopularFantasyComponent implements OnInit {
  bookData: any;
  books: any[]=[];
  constructor(private bookService:BookService){}
  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    this.bookService.getAll().subscribe((data:any) => {
      data.forEach((template:any) => {
        if(template.type === 'book'){
          this.bookData = new Book(template.title, template.description,template.date_publish, template.type, template.id, template.imgUrl, template.likes, template.views, template.revenue, template.genre);
          this.books.push(this.bookData);
        }
      });
    });
  }

  protected readonly faHeart = faHeart;

}
