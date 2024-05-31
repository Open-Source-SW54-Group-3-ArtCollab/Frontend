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

  constructor(private _formBuilder: FormBuilder) {}

  onGenre1Selected(genre: string) {
    this.selectedGenre1 = genre;
    console.log('Género 1 seleccionado: ', this.selectedGenre1);
  }

  onGenre2Selected(genre: string) {
    this.selectedGenre2 = genre;
    console.log('Género 2 seleccionado: ', this.selectedGenre2);
  }

  onTitleChanged(title: string) {
    this.title = title;
    console.log('Título: ', this.title);
  }

  onSummaryChanged(summary: string) {
    this.summary = summary;
    console.log('Resumen: ', this.summary);
  }

}
