import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-the-writer-profile',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardImage,
    MatButton
  ],
  templateUrl: './the-writer-profile.component.html',
  styleUrl: './the-writer-profile.component.css'
})
export class TheWriterProfileComponent {

}
