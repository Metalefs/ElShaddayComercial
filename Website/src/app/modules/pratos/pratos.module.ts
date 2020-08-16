import { NgModule } from '@angular/core';

import { PratosComponent } from './page/pratos.component';
import { PratosRoutes } from './pratos.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PratosComponent
  ],
  imports: [SharedModule,PratosRoutes],
  exports: [],
  providers: []
})
export class PratosModule {}
