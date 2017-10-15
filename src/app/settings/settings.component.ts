import { Router } from '@angular/router';
import { UserService } from './../shared/service/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from './../shared/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

  user: User = new User();
  settingsForm: FormGroup;
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.settingsForm = this.formBuilder.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    });
  }

  ngOnInit() {
    // Make a fresh copy of the current user's object to place in editable form fields
    (<any>Object).assign(this.user, this.userService.getCurrentUser());
    this.settingsForm.patchValue(this.user);
  }

  logOut() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

  onSubmit() {
    this.isSubmitting = true;
    this.updateUser(this.settingsForm.value);
    this.userService.update(this.user).subscribe(
      updatedUser => {
        this.router.navigateByUrl('/profile/' + updatedUser.username);
      },
      err => {
        this.errors = err;
        this.isSubmitting = false;
      });
  }
  updateUser(values: Object) {
    (<any>Object).assign(this.user, values);
  }


}
