import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CollectionComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    CollectionComponent
  ]
})
export class CollectionModule {}