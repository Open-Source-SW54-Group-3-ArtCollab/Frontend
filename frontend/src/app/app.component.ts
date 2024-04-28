import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarContentComponent} from "./public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";
import {TheUserLoginComponent} from "./user/components/the-user-login/the-user-login.component";
import {TheUserRegisterComponent} from "./user/components/the-user-register/the-user-register.component";
import {
  TheUserRecoverPasswordComponent
} from "./user/components/the-user-recover-password/the-user-recover-password.component";
import {UserArtistComponent} from "./user/pages/user-artist/user-artist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarContentComponent, FooterContentComponent, TheUserLoginComponent, TheUserRegisterComponent, TheUserRecoverPasswordComponent, UserArtistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  showLogin = false;
}
