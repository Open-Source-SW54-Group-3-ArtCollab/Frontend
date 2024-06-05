import {Component, EventEmitter, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'the-book-publish-thumbnail',
  standalone: true,
    imports: [
        MatIcon
    ],
  templateUrl: './the-book-publish-thumbnail.component.html',
  styleUrl: './the-book-publish-thumbnail.component.css'
})
export class TheBookPublishThumbnailComponent {
  bookData:any= {};

  @Output() bookCoverChanged = new EventEmitter<any>();

  onIconClick() {
    const newImageUrl = prompt('Por favor, ingresa la nueva URL de la imagen');
    if (newImageUrl) {
      this.bookData.imgUrl = newImageUrl;
      this.bookCoverChanged.emit(this.bookData.imgUrl);
    }
  }
}
