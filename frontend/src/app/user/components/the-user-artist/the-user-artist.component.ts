import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardImage, MatCardTitle} from "@angular/material/card";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";

@Component({
  selector: 'app-the-user-artist',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardImage,
    MatGridList,
    MatGridTile
  ],
  templateUrl: './the-user-artist.component.html',
  styleUrl: './the-user-artist.component.css'
})
export class TheUserArtistComponent {

}
