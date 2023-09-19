import { NgModule } from '@angular/core';
import { AuthRecoverPasswordComponent } from './recover-password.component';
import { RouterModule } from '@angular/router';
import { authRecoverPasswordRoutes } from './recover-password.routing';
import { SharedModule } from '@/shared/shared.module';



@NgModule({
  declarations: [
    AuthRecoverPasswordComponent
  ],
  imports: [
    RouterModule.forChild(authRecoverPasswordRoutes),
    SharedModule
  ]
})
export class AuthRecoverPasswordModule { }
