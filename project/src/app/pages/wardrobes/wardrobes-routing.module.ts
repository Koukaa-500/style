import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WardrobesPage } from './wardrobes.page';

const routes: Routes = [
  {
    path: '',
    component: WardrobesPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WardrobesPageRoutingModule {}
