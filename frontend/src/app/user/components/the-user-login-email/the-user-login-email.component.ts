import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-the-user-login-email',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormField,
    MatInput,
    MatButton,
    FormsModule,
    MatLabel,
    NgIf,
  ],
  templateUrl: './the-user-login-email.component.html',
  styleUrl: './the-user-login-email.component.css'
})
export class TheUserLoginEmailComponent {
  @Output() back = new EventEmitter<void>();
  password = '';
  @Input() showEmailLogin !: boolean;
  @Output() close = new EventEmitter<void>();

  closeLogin() {
    this.showEmailLogin = false;
    this.close.emit();
  }

  backToLogin() {
    this.showEmailLogin = false;
    this.back.emit();
  }
}
