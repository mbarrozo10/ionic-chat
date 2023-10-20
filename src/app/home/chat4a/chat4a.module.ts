import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chat4aPageRoutingModule } from './chat4a-routing.module';

import { Chat4aPage } from './chat4a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chat4aPageRoutingModule
  ],
  declarations: [Chat4aPage]
})
export class Chat4aPageModule {}
