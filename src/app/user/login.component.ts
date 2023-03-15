import { Component } from '@angular/core';
import { AuthService } from './auth.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      em {
        float: right;
        color: red;
      }
    `,
  ],
})
export class LoginComponent {
  constructor(private authService: AuthService, private route: Router) {}
  userName: any;
  password: any;
  mouseOverLogin: boolean = false;

  loginInvalid = false;

  login(values: any) {
    this.authService
      .loginUser(values.userName, values.password)
      .subscribe((response) => {
        if (!response) {
          this.loginInvalid = true;
        } else {
          this.route.navigate(['events']);
        }
      });
  }
  cance() {
    this.route.navigate(['events']);
  }
}
