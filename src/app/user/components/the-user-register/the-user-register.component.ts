import {Component, OnInit, ViewChild} from '@angular/core';
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatCheckbox} from "@angular/material/checkbox";
import {FormControl, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDivider} from "@angular/material/divider";
import {faFacebook, faGoogle, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {UsersService} from "../../../shared/service/users.service";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {SignUpRequest} from "../../../shared/model/sign-up.request";

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
    FaIconComponent,
    NgIf,
    ReactiveFormsModule,
    MatError,
    RouterLink
  ],
  templateUrl: './the-user-register.component.html',
  styleUrl: './the-user-register.component.css'
})
export class TheUserRegisterComponent implements OnInit{
  @ViewChild('registerForm') registerForm!: NgForm;
  email  = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]);
  confirm_password = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required, Validators.maxLength(20)]);
  artist = new FormControl(false);
  first_name = 'Guest';
  last_name = 'User';
  imgUrl = 'https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg';
  type = 'reader';


  hide = true;
  hideConfirm = true;
  protected readonly faFacebook = faFacebook;
  protected readonly faGoogle = faGoogle;
  protected readonly faTwitter = faTwitter;

  constructor(private usersService: UsersService, private router: Router) {

  }

  ngOnInit(): void {
  }
  register() {

    if (this.artist.value) {
      this.type = 'ILUSTRATOR';
    }
    else{
      this.type = 'READER';
    }

    if (!this.email.valid || !this.password.valid || !this.confirm_password.valid || !this.username.valid) {
      return;
    }

    if (this.password.value !== this.confirm_password.value) {
      this.confirm_password.setErrors({ mismatch: true });
      return;
    }

    console.log( {email: this.email.value,
      password: this.password.value,
      username: this.username.value,
      imgUrl: this.imgUrl,
      name: this.first_name + ' ' + this.last_name,
      type: this.type})

    this.usersService.createUser({
      email: this.email.value,
      password: this.password.value,
      username: this.username.value,
      imgUrl: this.imgUrl,
      name: this.first_name + ' ' + this.last_name,
      type: this.type
    }).subscribe(response => {
        alert("User registered successfully");
        setTimeout(() => {
          this.router.navigate(['/home']).then(() =>
               window.location.reload()
          );
        },0);
    });

    let username = this.username.value;
    let password = this.password.value;

    if (username !== null && password !== null) {
      const signUpRequest = new SignUpRequest(username, password);
    }
  }

}
