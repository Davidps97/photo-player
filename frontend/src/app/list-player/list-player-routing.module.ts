import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPlayersPage } from './list-player.page';

const routes: Routes = [
  {
    path: '',
    component: ListPlayersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListplayersPageRoutingModule {}
