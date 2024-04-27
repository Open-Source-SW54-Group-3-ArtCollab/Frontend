import {ChangeDetectorRef, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MediaMatcher} from "@angular/cdk/layout";
import {RouterLink} from "@angular/router";
import {TheUserLoginComponent} from "../../../user/components/the-user-login/the-user-login.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'navbar-content',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatSidenavModule,
    MatNavList,
    MatListItem,
    RouterLink,
    TheUserLoginComponent,
    NgIf
  ],
  templateUrl: './navbar-content.component.html',
  styleUrl: './navbar-content.component.css'
})
export class NavbarContentComponent {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  showLogin = false;
  showEmailLogin = false;

  openLogin() {
    this.showLogin = true;
  }

  handleCloseLogin() {
    this.showLogin = false;
  }

  openEmailLogin() {
    this.showEmailLogin = true;
  }

  handleCloseEmailLogin() {
    this.showEmailLogin = false;
  }

}
