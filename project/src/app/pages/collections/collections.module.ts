import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectionsPageRoutingModule } from './collections-routing.module';

import { CollectionsPage } from './collections.page';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CollectionModule } from 'src/app/components/collection/collection.module';
import { FilterByTypePipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectionsPageRoutingModule,
    CollectionModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  declarations: [CollectionsPage,FilterByTypePipe]
})
export class CollectionsPageModule {}
