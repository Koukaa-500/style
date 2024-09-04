import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordSettingsPageRoutingModule } from './password-settings-routing.module';

import { PasswordSettingsPage } from './password-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordSettingsPageRoutingModule
  ],
  declarations: [PasswordSettingsPage]
})
export class PasswordSettingsPageModule {}
