import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite.component';

@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    FavoriteComponent
  ]
})
export class FavoriteModule {}