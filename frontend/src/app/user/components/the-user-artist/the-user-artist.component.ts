import { Component } from '@angular/core';
import {MatCard, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-the-user-artist',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle
  ],
  templateUrl: './the-user-artist.component.html',
  styleUrl: './the-user-artist.component.css'
})
export class TheUserArtistComponent {

}
