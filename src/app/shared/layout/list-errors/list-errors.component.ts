import { Errors } from './../../models/errors.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-errors',
  templateUrl: './list-errors.component.html'
})
export class ListErrorsComponent {
  formattetErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattetErrors = [];

    if (errorList.errors) {
      for (const field in errorList.errors) {
        this.formattetErrors.push(`${field} ${errorList.errors[field]}`);
      }
    }
  }

  get errorList() {
    return this.formattetErrors;
  }

}
