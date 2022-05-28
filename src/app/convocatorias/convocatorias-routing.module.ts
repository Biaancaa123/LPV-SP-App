import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvocatoriasPage } from './convocatorias.page';

const routes: Routes = [
  {
    path: '',
    component: ConvocatoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvocatoriasPageRoutingModule {}
