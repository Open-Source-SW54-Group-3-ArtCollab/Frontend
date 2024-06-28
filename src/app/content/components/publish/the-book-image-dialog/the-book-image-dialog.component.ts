import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-the-book-image-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatDialogClose
  ],
  templateUrl: './the-book-image-dialog.component.html',
  styleUrl: './the-book-image-dialog.component.css'
})
export class TheBookImageDialogComponent {
  imageUrl = '';

  constructor(
    public dialogRef: MatDialogRef<TheBookImageDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
