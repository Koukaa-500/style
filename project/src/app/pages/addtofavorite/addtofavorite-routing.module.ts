import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtofavoritePage } from './addtofavorite.page';

const routes: Routes = [
  {
    path: '',
    component: AddtofavoritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtofavoritePageRoutingModule {}
