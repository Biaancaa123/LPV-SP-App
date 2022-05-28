import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BancodeSangrePageRoutingModule } from './bancode-sangre-routing.module';

import { BancodeSangrePage } from './bancode-sangre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BancodeSangrePageRoutingModule
  ],
  declarations: [BancodeSangrePage]
})
export class BancodeSangrePageModule {}
