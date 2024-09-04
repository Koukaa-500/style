import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ArticleModule } from "../../components/article/article.module";
import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { ArticleComponent } from 'src/app/components/article/article.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    ArticleModule,SearchPipe
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
