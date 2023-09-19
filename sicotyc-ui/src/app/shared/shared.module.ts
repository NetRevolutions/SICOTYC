import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfabricComponentsModule } from '@profabric/angular-components';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfabricComponentsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    })       
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfabricComponentsModule,
    ToastrModule
  ]
})
export class SharedModule { }
