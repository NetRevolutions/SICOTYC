import { NgModule } from '@angular/core';
import { SharedModule } from '@/shared/shared.module';
import { RouterModule } from '@angular/router';
import { authForgotPasswordRoutes } from './forgot-password.routing';
import { AuthForgotPasswordComponent } from './forgot-password.component';


@NgModule({
  declarations: [
    AuthForgotPasswordComponent
  ],
  imports: [
    RouterModule.forChild(authForgotPasswordRoutes),
    SharedModule
  ]
})
export class AuthForgotPasswordModule { }
