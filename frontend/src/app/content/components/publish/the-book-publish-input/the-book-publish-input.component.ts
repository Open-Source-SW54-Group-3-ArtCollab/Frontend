import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-the-book-publish-input',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './the-book-publish-input.component.html',
  styleUrl: './the-book-publish-input.component.css'
})
export class TheBookPublishInputComponent {

}
