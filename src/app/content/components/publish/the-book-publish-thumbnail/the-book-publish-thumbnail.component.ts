import {Component, EventEmitter, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {TheBookImageDialogComponent} from "../the-book-image-dialog/the-book-image-dialog.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'the-book-publish-thumbnail',
  standalone: true,
  imports: [
    MatIcon,
    NgIf
  ],
  templateUrl: './the-book-publish-thumbnail.component.html',
  styleUrl: './the-book-publish-thumbnail.component.css'
})
export class TheBookPublishThumbnailComponent {
  bookData:any= {};

  @Output() bookCoverChanged = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  onIconClick(): void {
    const dialogRef = this.dialog.open(TheBookImageDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookData.imgUrl = result;
        this.bookCoverChanged.emit(this.bookData.imgUrl);
      }
    });
  }
}
