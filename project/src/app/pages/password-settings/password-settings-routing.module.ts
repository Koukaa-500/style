import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordSettingsPage } from './password-settings.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordSettingsPageRoutingModule {}
