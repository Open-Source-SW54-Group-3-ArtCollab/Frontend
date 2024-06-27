import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../service/book.service";
import {Book} from '../../../model/book.entity';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'book-popular-comedy',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './book-popular-comedy.component.html',
  styleUrl: './book-popular-comedy.component.css'
})
export class BookPopularComedyComponent implements OnInit{
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
            this.bookData = new Book(template.title, template.description,template.date_publish, template.type, template.id, template.imgURL, template.likes, template.views,  template.genre);
            this.books.push(this.bookData);
          }
        });
      });
  }

  protected readonly faHeart = faHeart;

  update(id:any){
    this.increase(id)
  }

  increase(id:any) {
    const bookToUpdate = this.books.find(book => book.id === id);
    if(bookToUpdate){
      this.bookService.increaseLike(id, bookToUpdate.likes + 1 ).subscribe((data:any) => {
        bookToUpdate.likes = data.likes;
      });
    }
  }
}
