import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPageRoutingModule } from './favorites-routing.module';

import { FavoritesPage } from './favorites.page';
import { FavoriteModule } from "../../components/favorite/favorite.module";
import { FavoriteFilterPipe } from './favorite.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule,
    FavoriteModule
],
  declarations: [FavoritesPage,FavoriteFilterPipe]
})
export class FavoritesPageModule {}
