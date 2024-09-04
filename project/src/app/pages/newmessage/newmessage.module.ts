import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewmessagePageRoutingModule } from './newmessage-routing.module';

import { NewmessagePage } from './newmessage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewmessagePageRoutingModule
  ],
  declarations: [NewmessagePage]
})
export class NewmessagePageModule {}
