import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WardrobesPageRoutingModule } from './wardrobes-routing.module';

import { WardrobesPage } from './wardrobes.page';
import { CategoryComponent } from 'src/app/components/category/category.component';
import { WordrobePipe } from './wordrobe.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WardrobesPageRoutingModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  declarations: [WardrobesPage,CategoryComponent,WordrobePipe]
})
export class WardrobesPageModule {}
