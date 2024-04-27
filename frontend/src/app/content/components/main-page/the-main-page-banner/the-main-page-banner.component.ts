import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {GalleryModule, GalleryComponent, GalleryItem, ImageItem} from "ng-gallery";
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faChevronDown, faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-the-main-page-banner',
  standalone: true,
  imports: [
    GalleryComponent,
    MatCardModule,
    MatButtonModule,
    NgForOf,
    FontAwesomeModule
  ],
  templateUrl: './the-main-page-banner.component.html',
  styleUrl: './the-main-page-banner.component.css'
})
export class TheMainPageBannerComponent {

  items = [
    {url: 'https://picsum.photos/id/237/200/300', alt: 'Image 1'},
    {url: 'https://picsum.photos/id/238/200/300', alt: 'Image 2'},
    {url: 'https://picsum.photos/id/239/200/300', alt: 'Image 3'},
    {url: 'https://picsum.photos/id/240/200/300', alt: 'Image 4'},
    {url: 'https://picsum.photos/id/241/200/300', alt: 'Image 5'},
  ];

  currentImageIndex = 0;

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.items.length) % this.items.length;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.items.length;
  }

  protected readonly faChevronDown = faChevronDown;
  protected readonly faChevronLeft = faChevronLeft;
  protected readonly faChevronRight = faChevronRight;
}
