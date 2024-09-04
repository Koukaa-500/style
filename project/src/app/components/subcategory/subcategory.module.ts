import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SubcategoryComponent } from './subcategory.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SubcategoryComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    SubcategoryComponent
  ]
})
export class SubcategoryModule {}