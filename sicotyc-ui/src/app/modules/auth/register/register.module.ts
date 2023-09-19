import { NgModule } from '@angular/core';
import { AuthRegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { authRegisterRoutes } from './register.routing';
import { SharedModule } from '@/shared/shared.module';



@NgModule({
  declarations: [
    AuthRegisterComponent
  ],
  imports: [
    RouterModule.forChild(authRegisterRoutes),
    SharedModule
  ]
})
export class AuthRegisterModule { }
