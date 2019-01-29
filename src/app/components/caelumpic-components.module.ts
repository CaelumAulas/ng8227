import { NgModule } from '@angular/core';
import { FotoComponent } from './foto/foto.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    FotoComponent,
    CardComponent
  ],
  exports: [
    FotoComponent,
    CardComponent
  ]
})
export class CaelumpicComponentsModule {}
