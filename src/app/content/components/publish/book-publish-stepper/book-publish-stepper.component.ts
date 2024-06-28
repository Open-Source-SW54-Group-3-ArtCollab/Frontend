import { Component, ElementRef, ViewChild } from '@angular/core';
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
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from "@angular/router";
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

  constructor(private _formBuilder: FormBuilder, private router: Router, private bookService: BookService, private _snackBar: MatSnackBar) {}

  publishBook(){
    this.router.navigateByUrl('/books-profile');
  }

  save() {
    this.router.navigateByUrl('/my-stories');
  }

  preview() {
    this.router.navigateByUrl('/chapter-preview');
  }

  selectedGenre1!: string;
  selectedGenre2!: string;
  title!: string;
  summary!: string;
  bookCover!: string;

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
    let combinedGenres = this.selectedGenre1 + ', ' + this.selectedGenre2;
    const bookData = {
      title: this.title,
      description: this.summary,
      type: 'book',
      imgURL: this.bookCover,
      views: 0,
      likes: 0,
      genre: combinedGenres,
      templateState: 'false',
      templateState_Id: 0,
      templateHistory_Id: 0,
      portfolio_Id: 1
    };

    this.bookService.createBook(bookData).subscribe(
      response => {
        console.log('Libro creado con éxito: ', response);
        this._snackBar.open('Libro creado con éxito', 'Cerrar', {
          duration: 2000,
        });
      },
      error => {
        console.error('Error al crear el libro: ', error);
      }
    );
  }
}
