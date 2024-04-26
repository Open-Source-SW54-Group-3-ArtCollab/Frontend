import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {GalleryModule, GalleryComponent, GalleryItem, ImageItem} from "ng-gallery";

@Component({
  selector: 'app-the-main-page-banner',
  standalone: true,
  imports: [
    GalleryComponent
  ],
  templateUrl: './the-main-page-banner.component.html',
  styleUrl: './the-main-page-banner.component.css'
})
export class TheMainPageBannerComponent implements OnInit, AfterViewInit {

  @ViewChild(GalleryComponent) gallery!: GalleryComponent;

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.gallery.load([
      new ImageItem({src: 'https://picsum.photos/id/237/200/300'}),
      new ImageItem({src: 'https://picsum.photos/id/238/200/300'}),
      new ImageItem({src: 'https://picsum.photos/id/239/200/300'}),
      new ImageItem({src: 'https://picsum.photos/id/237/200/300'}),
    ]);
  }
}
