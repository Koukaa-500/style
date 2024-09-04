import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectionLostPageRoutingModule } from './connection-lost-routing.module';

import { ConnectionLostPage } from './connection-lost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectionLostPageRoutingModule
  ],
  declarations: [ConnectionLostPage]
})
export class ConnectionLostPageModule {}
