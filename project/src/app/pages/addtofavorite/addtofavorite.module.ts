import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtofavoritePageRoutingModule } from './addtofavorite-routing.module';

import { AddtofavoritePage } from './addtofavorite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddtofavoritePageRoutingModule
  ],
  declarations: [AddtofavoritePage]
})
export class AddtofavoritePageModule {}
