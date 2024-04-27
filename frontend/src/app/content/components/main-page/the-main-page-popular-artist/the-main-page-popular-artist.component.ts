import { Component } from '@angular/core';
import {MainPageCarouselsComponent} from "../main-page-carousels/main-page-carousels.component";

@Component({
  selector: 'app-the-main-page-popular-artist',
  standalone: true,
  imports: [
    MainPageCarouselsComponent
  ],
  templateUrl: './the-main-page-popular-artist.component.html',
  styleUrl: './the-main-page-popular-artist.component.css'
})
export class TheMainPagePopularArtistComponent {
  items = [
    {url: 'https://picsum.photos/id/237/200/300', alt: 'Image 1', name: 'Artist 1'},
    {url: 'https://picsum.photos/id/238/200/300', alt: 'Image 2', name: 'Artist 2'},
    {url: 'https://picsum.photos/id/239/200/300', alt: 'Image 3', name: 'Artist 3'},
    {url: 'https://picsum.photos/id/240/200/300', alt: 'Image 4', name: 'Artist 4'},
    {url: 'https://picsum.photos/id/241/200/300', alt: 'Image 5', name: 'Artist 5'},
  ];
}
