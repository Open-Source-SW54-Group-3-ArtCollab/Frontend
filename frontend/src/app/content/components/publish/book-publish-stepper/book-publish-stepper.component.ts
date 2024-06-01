import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {
  TheBookPublishGenresSelectComponent
} from "../the-book-publish-genres-select/the-book-publish-genres-select.component";
import {
  TheBookPublishTitleInputComponent
} from "../the-book-publish-title-input/the-book-publish-title-input.component";
import {
  TheBookPublishSummaryTextareaComponent
} from "../the-book-publish-summary-textarea/the-book-publish-summary-textarea.component";
import {TheBookPublishThumbnailComponent} from "../the-book-publish-thumbnail/the-book-publish-thumbnail.component";
import {MatIcon} from "@angular/material/icon";
import {BookService} from "../../../service/book.service";
import {Book} from "../../../model/book.entity";
@Component({
  selector: 'app-book-publish-stepper',
  standalone: true,
  imports: [MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, TheBookPublishGenresSelectComponent, TheBookPublishTitleInputComponent, TheBookPublishSummaryTextareaComponent, TheBookPublishThumbnailComponent, MatIcon,],
  templateUrl: './book-publish-stepper.component.html',
  styleUrl: './book-publish-stepper.component.css'
})
export class BookPublishStepperComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  @ViewChild('fileInput') fileInput!: ElementRef;

  onIconClick() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      if (!file.type.startsWith('image/')) {
        alert('Por favor, sube solo imágenes.');
        return;
      }
    }
  }

  selectedGenre1!: string;
  selectedGenre2!: string;
  title!: string;
  summary!: string;
  bookCover!: string;

  constructor(private _formBuilder: FormBuilder, private bookService: BookService) {}

  onGenre1Selected(genre: string) {
    this.selectedGenre1 = genre;
  }

  onGenre2Selected(genre: string) {
    this.selectedGenre2 = genre;
  }

  onTitleChanged(title: string) {
    this.title = title;
  }

  onSummaryChanged(summary: string) {
    this.summary = summary;
  }

  onBookCoverChanged(bookCover: string) {
    this.bookCover = bookCover;
  }

  onPublishClick() {
    this.bookService.getAll().subscribe((data: any) => {
      const maxId = data.reduce((max: number, book: any) => Number(book.id) > max ? Number(book.id) : max, 0);

      const newBook = new Book(
        this.title,
        this.summary, // Asume que este es el campo de descripción
        new Date().toISOString().slice(0,10),
        'book', // Actualiza esto con el tipo correcto
        (maxId + 1).toString(), // Asigna al nuevo libro un ID que sea uno mayor que el máximo actual
        this.bookCover,
        0, // Asume que este es el campo de likes
        0, // Asume que este es el campo de vistas
        0, // Asume que este es el campo de ingresos
        this.selectedGenre1
      );

      // Crear un objeto con los datos del libro utilizando los métodos getter
      const bookData = {
        title: newBook.title,
        description: newBook.description,
        date_publish: newBook.date_publish,
        type: newBook.type,
        id: newBook.id,
        imgUrl: newBook.imgUrl,
        likes: newBook.likes,
        views: newBook.views,
        revenue: newBook.revenue,
        genre: newBook.genre
      };

      this.bookService.createBook(bookData).subscribe(
        response => {
          console.log('Libro creado con éxito: ', response);
        },
        error => {
          console.error('Error al crear el libro: ', error);
        }
      );
    });
  }

}
