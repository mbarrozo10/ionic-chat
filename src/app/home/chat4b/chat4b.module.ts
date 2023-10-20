import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chat4bPageRoutingModule } from './chat4b-routing.module';

import { Chat4bPage } from './chat4b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chat4bPageRoutingModule
  ],
  declarations: [Chat4bPage]
})
export class Chat4bPageModule {}
