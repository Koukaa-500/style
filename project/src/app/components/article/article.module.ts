import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleModule {}