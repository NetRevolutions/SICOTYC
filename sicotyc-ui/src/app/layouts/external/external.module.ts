import { NgModule } from '@angular/core';
import { ExternalLayoutComponent } from './external.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@/shared/shared.module';



@NgModule({
  declarations: [
    ExternalLayoutComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    ExternalLayoutComponent
  ]
})
export class ExternalLayoutModule { }
