import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvocatoriasPageRoutingModule } from './convocatorias-routing.module';

import { ConvocatoriasPage } from './convocatorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConvocatoriasPageRoutingModule
  ],
  declarations: [ConvocatoriasPage]
})
export class ConvocatoriasPageModule {}
