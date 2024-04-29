import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'app-the-ilustrator-profile-edit',
  standalone: true,
  imports: [
    MatIcon,
    MatCard,
    MatCardContent
  ],
  templateUrl: './the-ilustrator-profile-edit.component.html',
  styleUrl: './the-ilustrator-profile-edit.component.css'
})
export class TheIlustratorProfileEditComponent {

}
