import { Component, OnInit, Inject } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

import { Router } from '@angular/router';

import { TOASTER_TOKEN, Toaster } from '../common/toastr.service';
@Component({
  templateUrl: './profile.component.html',
  styles: [
    `
      em {
        float: right;
        color: red;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::webkit-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  private firstName!: FormControl;
  private lastName!: FormControl;

  constructor(
    private authService: AuthService,
    private route: Router,
    @Inject(TOASTER_TOKEN) private toastr: Toaster
  ) {}

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]);
    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.route.navigate(['user/login']);
    });
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  cancel() {
    this.route.navigate(['events']);
  }
  saveProfile(value: { firstName: string; lastName: string }) {
    if (this.profileForm.valid) {
      this.authService
        .updateCurrentUser(value.firstName, value.lastName)
        .subscribe(() => {
          this.toastr.success('Profile updated');
        });
    }
  }
}
