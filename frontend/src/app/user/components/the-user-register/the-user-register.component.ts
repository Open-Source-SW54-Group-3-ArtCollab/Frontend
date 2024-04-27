import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatCheckbox} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatDivider} from "@angular/material/divider";
import {faFacebook, faGoogle, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-the-user-register',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatIconButton,
    MatIconModule,
    MatCheckbox,
    FormsModule,
    MatButton,
    MatDivider,
    FaIconComponent
  ],
  templateUrl: './the-user-register.component.html',
  styleUrl: './the-user-register.component.css'
})
export class TheUserRegisterComponent {
  password = '';
  confirm_password = '';
  artist = false;
  hide = true;
  hideConfirm = true;
  protected readonly faFacebook = faFacebook;
  protected readonly faGoogle = faGoogle;
  protected readonly faTwitter = faTwitter;
}
