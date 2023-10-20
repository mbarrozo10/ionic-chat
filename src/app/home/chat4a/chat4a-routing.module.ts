import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chat4aPage } from './chat4a.page';

const routes: Routes = [
  {
    path: '',
    component: Chat4aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chat4aPageRoutingModule {}
