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

import {ThePopularsPageComponent} from "./content/pages/the-populars-page/the-populars-page.component";
import { TheBookProfileComponent } from './content/components/the-book-profile/the-book-profile.component';
import { TheBookDetailsComponent } from './shared/components/the-book-details/the-book-details.component';
import {BookPublishPageComponent} from "./content/pages/book-publish-page/book-publish-page.component";
import {TheDetailsPageComponent} from "./shared/pages/the-details-page/the-details-page.component";
import {TheEditPageComponent} from "./shared/pages/the-edit-page/the-edit-page.component";
import {BookProfileComponent} from "./content/pages/book-profile/book-profile.component";
import {BookDetailComponent} from "./content/pages/book-detail/book-detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarContentComponent,
    FooterContentComponent,
    TheMainPageBannerComponent,
    TheMainPageGenresComponent,
    TheMainPagePopularityComponent, TheMainPageRecentBookComponent, TheMainPagePopularArtistComponent, ThePopularsPageComponent,
    TheMainPagePopularityComponent,
    TheMainPageRecentBookComponent,
    TheMainPagePopularArtistComponent,
    TheBookProfileComponent,
    TheBookDetailsComponent, BookPublishPageComponent, TheDetailsPageComponent, TheEditPageComponent, BookProfileComponent, BookDetailComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
