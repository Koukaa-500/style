import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileInfosPage } from './profile-infos.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileInfosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileInfosPageRoutingModule {}
