import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [  {
      path: 'inicio',
      loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule),

    },
    {
      path: 'bancode-sangre',
      loadChildren: () => import('../bancode-sangre/bancode-sangre.module').then( m => m.BancodeSangrePageModule)
    },
    {
      path: 'convocatorias',
      loadChildren: () => import('../convocatorias/convocatorias.module').then( m => m.ConvocatoriasPageModule)
    },
    {
      path: 'informacion',
      loadChildren: () => import('../informacion/informacion.module').then( m => m.InformacionPageModule)
    },
    {
      path: 'quedonar',
      loadChildren: () => import('../quedonar/quedonar.module').then( m => m.QuedonarPageModule)
    },
    {
      path: 'requisitos',
      loadChildren: () => import('../requisitos/requisitos.module').then( m => m.RequisitosPageModule)
    },
    {
      path: 'prevencion',
      loadChildren: () => import('../prevencion/prevencion.module').then( m => m.PrevencionPageModule)
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
