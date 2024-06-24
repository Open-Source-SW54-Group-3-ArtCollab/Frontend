import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {UsersService} from "../../../shared/service/users.service";
import {RouterLink} from "@angular/router";
import {AuthenticationService} from "../../../shared/service/authentication.service";
import {SignInRequest} from "../../../shared/model/sign-in.request";

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
    MatIconButton,
    MatIcon,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './the-user-login-email.component.html',
  styleUrl: './the-user-login-email.component.css'
})
export class TheUserLoginEmailComponent {
  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  hide = true;

  @Output() back = new EventEmitter<void>();
  @Input() showEmailLogin !: boolean;
  @Output() close = new EventEmitter<void>();

  constructor(private usersService: UsersService, private authenticationService: AuthenticationService) { }


  login() {
    if (this.username.value === null || this.password.value === null) {
      console.error('Email and password must not be null');
      return;
    }
    if (this.username.invalid || this.password.invalid) {
      console.error('Email and password must be valid');
      return;
    }

    let username = this.username.value;
    let password = this.password.value;

    const signInRequest = new SignInRequest(username, password);

    this.authenticationService.signIn(signInRequest);
  }


  closeLogin() {
    this.showEmailLogin = false;
    this.close.emit();
  }

  backToLogin() {
    this.showEmailLogin = false;
    this.back.emit();
  }


}
