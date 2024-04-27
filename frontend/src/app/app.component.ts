import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarContentComponent} from "./public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";
import {
  TheMainPageBannerComponent
} from "./content/components/main-page/the-main-page-banner/the-main-page-banner.component";
import {
  TheMainPageGenresComponent
} from "./content/components/main-page/the-main-page-genres/the-main-page-genres.component";
import {
  TheMainPagePopularityComponent
} from "./content/components/main-page/the-main-page-popularity/the-main-page-popularity.component";
import {
  TheMainPageRecentBookComponent
} from "./content/components/main-page/the-main-page-recent-book/the-main-page-recent-book.component";
import {
  TheMainPagePopularArtistComponent
} from "./content/components/main-page/the-main-page-popular-artist/the-main-page-popular-artist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarContentComponent,
    FooterContentComponent,
    TheMainPageBannerComponent,
    TheMainPageGenresComponent,
    TheMainPagePopularityComponent, TheMainPageRecentBookComponent, TheMainPagePopularArtistComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
