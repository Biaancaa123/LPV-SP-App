import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuedonarPage } from './quedonar.page';

const routes: Routes = [
  {
    path: '',
    component: QuedonarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuedonarPageRoutingModule {}
