import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'the-book-details-edit-tabview',
  standalone: true,
  imports: [MatTabsModule, MatFormField, MatInput, MatLabel, FormsModule],
  templateUrl: './the-book-details-edit-tabview.component.html',
  styleUrl: './the-book-details-edit-tabview.component.css'
})
export class TheBookDetailsEditTabviewComponent {
  value = 'Boulevard';
}
