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

  login(values: any) {
    this.authService.loginUser(values.userName, values.password);

    this.route.navigate(['events']);
  }
  cance() {
    this.route.navigate(['events']);
  }
}
