import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-players',
    pathMatch: 'full'
  },
  {
    path: 'add-player',
    loadChildren: () => import('./add-player/add-player.module').then( m => m.AddPlayerPageModule)
  },
  {
    path: 'list-players',
    loadChildren: () => import('./list-player/list-player.module').then( m => m.ListplayersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
