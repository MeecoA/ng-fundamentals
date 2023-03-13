import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //template based
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { userRoutes } from './user.routes';
import { LoginComponent } from './login.component';
//feature module
@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
