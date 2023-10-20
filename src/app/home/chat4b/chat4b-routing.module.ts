import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chat4bPage } from './chat4b.page';

const routes: Routes = [
  {
    path: '',
    component: Chat4bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chat4bPageRoutingModule {}
