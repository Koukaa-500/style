import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColPageRoutingModule } from './col-routing.module';

import { ColPage } from './col.page';
import { ArticleModule } from "../../../components/article/article.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColPageRoutingModule,
    ArticleModule
],
  declarations: [ColPage]
})
export class ColPageModule {}
