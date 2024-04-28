import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

interface Genre {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-the-book-publish-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './the-book-publish-select.component.html',
  styleUrl: './the-book-publish-select.component.css'
})
export class TheBookPublishSelectComponent {
  genres: Genre[] = [
    {value: 'romance-0', viewValue: 'Romance'},
    {value: 'fantasy-1', viewValue: 'Fantasía'},
    {value: 'comedy-2', viewValue: 'Comedia'},
  ];
}
