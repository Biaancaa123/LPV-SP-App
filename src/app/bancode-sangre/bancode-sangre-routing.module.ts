import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BancodeSangrePage } from './bancode-sangre.page';

const routes: Routes = [
  {
    path: '',
    component: BancodeSangrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BancodeSangrePageRoutingModule {}
