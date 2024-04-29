import { Component } from '@angular/core';
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {Observable, Observer} from "rxjs";
import {AsyncPipe} from "@angular/common";

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'the-populars-page',
  standalone: true,
  imports: [
    NavbarContentComponent,
    FooterContentComponent,
    MatTabGroup,
    MatTab,
    MatTabLabel,
    AsyncPipe
  ],
  templateUrl: './the-populars-page.component.html',
  styleUrl: './the-populars-page.component.css'
})
export class ThePopularsPageComponent {
  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Todo', content: 'Content 0'},
          {label: 'Romance', content: 'Content 1'},
          {label: 'Fantasia', content: 'Content 2'},
          {label: 'Comedia', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }

}
