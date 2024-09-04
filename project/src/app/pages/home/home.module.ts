import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SearchPipe } from './search.pipe';
import { HomePageRoutingModule } from './home-routing.module';
import { ArticleModule } from "../../components/article/article.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ArticleModule
],
  declarations: [HomePage,SearchPipe]
})
export class HomePageModule {}
