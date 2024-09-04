import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WardrobePageRoutingModule } from './wardrobe-routing.module';

import { WardrobePage } from './wardrobe.page';
import { SubcategoryComponent } from 'src/app/components/subcategory/subcategory.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WardrobePageRoutingModule
  ],
  declarations: [WardrobePage,SubcategoryComponent]
})
export class WardrobePageModule {}
