import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionsPage } from './collections.page';

const routes: Routes = [
  {
    path: '',
    component: CollectionsPage
  },  {
    path: 'col',
    loadChildren: () => import('./col/col.module').then( m => m.ColPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsPageRoutingModule {}
