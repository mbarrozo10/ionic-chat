import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'chat4a',
    loadChildren: () => import('./chat4a/chat4a.module').then( m => m.Chat4aPageModule)
  },
  {
    path: 'chat4b',
    loadChildren: () => import('./chat4b/chat4b.module').then( m => m.Chat4bPageModule)
  },
  //   path: 'lindas',
  //   loadChildren: () => import('../lindas/lindas.module').then( m => m.LindasPageModule)
  // }, {
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
