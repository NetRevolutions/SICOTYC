import { NgModule } from '@angular/core';
import { EmptyLayoutModule } from './empty/empty.module';
import { ExternalLayoutModule } from './external/external.module';
import { MainLayoutModule } from './main/main.module';

@NgModule({
  declarations: [],
  imports: [    
    EmptyLayoutModule,
    ExternalLayoutModule,
    MainLayoutModule
  ],
  exports: [
    EmptyLayoutModule,
    ExternalLayoutModule,
    MainLayoutModule
  ]
})
export class LayoutModule { }
