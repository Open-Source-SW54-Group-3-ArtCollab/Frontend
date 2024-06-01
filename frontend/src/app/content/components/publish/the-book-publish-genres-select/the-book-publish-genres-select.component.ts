import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

interface Genre {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-the-book-publish-genres-select',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './the-book-publish-genres-select.component.html',
  styleUrl: './the-book-publish-genres-select.component.css'
})
export class TheBookPublishGenresSelectComponent {
  genres: Genre[] = [
    {value: 'romance', viewValue: 'Romance'},
    {value: 'fantasía', viewValue: 'Fantasía'},
    {value: 'comedia', viewValue: 'Comedia'},
  ];

  selectedGenre1!: string;
  selectedGenre2!: string;

  constructor() {}

  @Output() genre1Selected = new EventEmitter<string>();
  @Output() genre2Selected = new EventEmitter<string>();

  onGenre1Change(event: MatSelectChange) {
    this.selectedGenre1 = event.value;
    this.genre1Selected.emit(this.selectedGenre1);
  }

  onGenre2Change(event: MatSelectChange) {
    this.selectedGenre2 = event.value || '';
    this.genre2Selected.emit(this.selectedGenre2);
  }

}
