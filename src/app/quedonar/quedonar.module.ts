import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuedonarPageRoutingModule } from './quedonar-routing.module';

import { QuedonarPage } from './quedonar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuedonarPageRoutingModule
  ],
  declarations: [QuedonarPage]
})
export class QuedonarPageModule {}
