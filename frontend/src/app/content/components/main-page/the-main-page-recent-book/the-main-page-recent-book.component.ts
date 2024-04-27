import { Component } from '@angular/core';
import {MainPageCarouselsComponent} from "../main-page-carousels/main-page-carousels.component";

@Component({
  selector: 'app-the-main-page-recent-book',
  standalone: true,
  imports: [
    MainPageCarouselsComponent
  ],
  templateUrl: './the-main-page-recent-book.component.html',
  styleUrl: './the-main-page-recent-book.component.css'
})
export class TheMainPageRecentBookComponent {
  items = [
    {url: 'https://picsum.photos/id/237/200/300', alt: 'Image 1'},
    {url: 'https://picsum.photos/id/238/200/300', alt: 'Image 2'},
    {url: 'https://picsum.photos/id/239/200/300', alt: 'Image 3'},
    {url: 'https://picsum.photos/id/240/200/300', alt: 'Image 4'},
    {url: 'https://picsum.photos/id/241/200/300', alt: 'Image 5'},
  ];
}
