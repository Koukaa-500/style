import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileInfosPageRoutingModule } from './profile-infos-routing.module';

import { ProfileInfosPage } from './profile-infos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileInfosPageRoutingModule
  ],
  declarations: [ProfileInfosPage]
})
export class ProfileInfosPageModule {}
