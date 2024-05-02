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
import {TheBookDetailsComponent} from "./shared/components/the-book-details/the-book-details.component";
import {BookPublishPageComponent} from "./content/pages/book-publish-page/book-publish-page.component";
import {BookProfileComponent} from "./content/pages/book-profile-page/book-profile.component";
import {ChapterComponent} from "./content/components/chapter/chapter/chapter.component";
import {WriterProfileComponent} from "./user/pages/writer-profile/writer-profile.component";
import {WriterProfileEditComponent} from "./user/pages/writer-profile-edit/writer-profile-edit.component";

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
  {path:'my-stories', component: TheBookDetailsComponent},
  {path:'publish-1', component: BookPublishPageComponent},
  {path:'book-profile', component: BookProfileComponent},
  {path:'chapter', component: ChapterComponent},
  {path:'writer-profile', component: WriterProfileComponent},
  {path:'writer-profile/edit', component: WriterProfileEditComponent},
];
