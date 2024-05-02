import { Routes } from '@angular/router';
import {MainPageComponent} from "./content/pages/main-page/main-page.component";
import {UserRegisterComponent} from "./user/pages/user-register/user-register.component";
import {BookGenrePageComponent} from "./content/pages/book-genre-page/book-genre-page.component";
import {ThePopularsPageComponent} from "./content/pages/the-populars-page/the-populars-page.component";
import {
  TheSubscriptionApplicationComponent
} from "./monetization/pages/the-subscription-application/the-subscription-application.component";
import {
  TheMonetizationApplicationComponent
} from "./monetization/pages/the-monetization-application/the-monetization-application.component";
import {UserArtistComponent} from "./user/pages/user-artist/user-artist.component";
import {BookPublishPageComponent} from "./content/pages/book-publish-page/book-publish-page.component";
import {BookDetailsEditPageComponent} from "./content/pages/book-details-edit-page/book-details-edit-page.component";
import {TheDetailsPageComponent} from "./shared/pages/the-details-page/the-details-page.component";
import {BookProfileComponent} from "./content/pages/book-profile-page/book-profile.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: MainPageComponent},
  {path:'', redirectTo:'/register', pathMatch:'full'},
  {path:'register', component: UserRegisterComponent},
  {path:'', redirectTo:'/genre', pathMatch:'full'},
  {path:'genre', component: BookGenrePageComponent},
  {path:'',redirectTo:'/populars', pathMatch:'full'},
  {path:'populars', component: ThePopularsPageComponent},
  {path: '', redirectTo: '/subscription', pathMatch: 'full' },
  {path:'subscription', component: TheSubscriptionApplicationComponent},
  {path:'', redirectTo:'/monetization', pathMatch:'full'},
  {path:'monetization', component: TheMonetizationApplicationComponent},
  {path:'',redirectTo:'/artist', pathMatch:'full'},
  {path:'artist', component:UserArtistComponent},
  {path:'',redirectTo:'/my-stories', pathMatch:'full'},
  {path:'my-stories', component: TheDetailsPageComponent},
  {path:'',redirectTo:'/publish', pathMatch:'full'},
  {path:'publish', component: BookPublishPageComponent},
  {path:'',redirectTo:'/story-edit', pathMatch:'full'},
  {path:'story-edit', component: BookDetailsEditPageComponent},
  {path:'',redirectTo:'/boulevard-book', pathMatch:'full'},
  {path:'boulevard-book', component: BookProfileComponent}
];
