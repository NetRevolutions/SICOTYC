import { NgModule } from '@angular/core';
import { AuthLoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { authLoginRoutes } from './login.routing';
import { SharedModule } from '@/shared/shared.module';



@NgModule({
  declarations: [
    AuthLoginComponent
  ],
  imports: [
    RouterModule.forChild(authLoginRoutes),
    SharedModule
  ]
})
export class AuthLoginModule { }
