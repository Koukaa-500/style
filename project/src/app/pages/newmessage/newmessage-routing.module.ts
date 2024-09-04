import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewmessagePage } from './newmessage.page';

const routes: Routes = [
  {
    path: '',
    component: NewmessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewmessagePageRoutingModule {}
