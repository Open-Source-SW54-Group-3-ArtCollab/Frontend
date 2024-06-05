import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardImage} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main-page-carousels',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MatButton,
    MatCard,
    MatCardImage,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './main-page-carousels.component.html',
  styleUrl: './main-page-carousels.component.css'
})
export class MainPageCarouselsComponent{

  @Input() title!: string;
  @Input() items: {url: string, alt: string, name?: string}[] = [];
  @Input() link!: string;


  currentImageIndex = 0;

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.items.length) % this.items.length;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.items.length;
  }

  getImages() {
    let images = [];
    images.push(this.items[(this.currentImageIndex) % this.items.length]);
    return images;
  }

  protected readonly faChevronRight = faChevronRight;
  protected readonly faChevronLeft = faChevronLeft;
}
