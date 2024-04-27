import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {MainPageCarouselsComponent} from "../main-page-carousels/main-page-carousels.component";

@Component({
  selector: 'app-the-main-page-genres',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MainPageCarouselsComponent
  ],
  templateUrl: './the-main-page-genres.component.html',
  styleUrl: './the-main-page-genres.component.css'
})
export class TheMainPageGenresComponent {

  protected readonly faChevronRight = faChevronRight;

  items = [
    {url: 'https://picsum.photos/id/237/200/300', alt: 'Image 1'},
    {url: 'https://picsum.photos/id/238/200/300', alt: 'Image 2'},
    {url: 'https://picsum.photos/id/239/200/300', alt: 'Image 3'},
    {url: 'https://picsum.photos/id/240/200/300', alt: 'Image 4'},
    {url: 'https://picsum.photos/id/241/200/300', alt: 'Image 5'},
  ];

  items2 = [
    {url: 'https://picsum.photos/id/242/200/300', alt: 'Image 6'},
    {url: 'https://picsum.photos/id/243/200/300', alt: 'Image 7'},
    {url: 'https://picsum.photos/id/244/200/300', alt: 'Image 8'},
    {url: 'https://picsum.photos/id/245/200/300', alt: 'Image 9'},
    {url: 'https://picsum.photos/id/246/200/300', alt: 'Image 10'},
  ];
}
