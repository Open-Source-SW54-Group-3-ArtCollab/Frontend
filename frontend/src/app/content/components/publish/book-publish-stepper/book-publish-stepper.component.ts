import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {
  TheBookPublishGenresSelectComponent
} from "../the-book-publish-genres-select/the-book-publish-genres-select.component";
import {
  TheBookPublishTitleInputComponent
} from "../the-book-publish-title-input/the-book-publish-title-input.component";
import {
  TheBookPublishSummaryTextareaComponent
} from "../the-book-publish-summary-textarea/the-book-publish-summary-textarea.component";
import {TheBookPublishThumbnailComponent} from "../the-book-publish-thumbnail/the-book-publish-thumbnail.component";
@Component({
  selector: 'app-book-publish-stepper',
  standalone: true,
  imports: [MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, TheBookPublishGenresSelectComponent, TheBookPublishTitleInputComponent, TheBookPublishSummaryTextareaComponent, TheBookPublishThumbnailComponent,],
  templateUrl: './book-publish-stepper.component.html',
  styleUrl: './book-publish-stepper.component.css'
})
export class BookPublishStepperComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}
